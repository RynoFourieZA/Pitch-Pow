# What is JWT?

Authentication is the process of checking if you are the person you are the person you claim to be. Then after authentication, authorisation checks what specific rights and acess you have (acess to protected api routes).

## Creating Our Server, Database and Table

- Creating our directory and installing our dependencies.

```bash
npm install express cors pg jsonwebtoken bycrypt
```

- Create Server

```bash
touch index.js
```

- To connect our database and create our server we will use the follwing code.

```javascript
const express = require('express');
const app = express();
const cors = require('cors');

//middleware
app.use(express.json()) //parse req.body
app.use(cors());

//routes

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
```

- Create Database (in a seperate file called ``sripts.sql``.

```sql
CREATE DATABASE pern;
```

- In order to create a unqiue user id we need to create an extention in our database that will allow us to use the uuid random id generatior. Type the following SQL command to your database.

```sql
create extension if not exists "uuid-ossp";
```

- Then create your table and schema.

```sql
CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);
```

## Connecting Our Server With To Database

- Create a seperate file called db.js, in that file we confiquire our connection by creating a ``pool``.

```javascript
const Pool = require('pg').Pool

const pool = new Pool ({
    user: "postgres",
    password: "",
    host: "localhost"
    port: 5432,
    database: "pern"
});

module.exports = pool;
```

## Building Register Route

- Create a new folder called routes, and inside create a  file called ``jwtAuth``. We will use ``express router`` to create these routes and use them in our ``index.js``.

```javascript
//Index.js
app.use('/auth', require('./routes/jwtAuth')); 
```

```javascript
//jwtAuth.js
const router = require('express').Router();
const pool = require('../db.js');
const bcrypt = require('bcrypt');
const jwtHenerator = require('../utils/jwtGenerator');


//-- registering/signup route
router.post('/signup', async (req, res) => {
    try {
        //1. Destructure the req.body (name, email, password)
        const { name, email, password } = req.body;

        //2. Check if user exost (if user exists the throw error)
        const user = await pool.query('SELECT * FROM users WHERE user_email = $1", [email]');

        //-- user exists in our database
        if ( user.rows.length !== 0) {
            return res.status(401).send("User Already Exists")
        }

        //3. Bycrpt the user password
        // -- salt rounds is the amount of encryption that will be used.
        const saltRounds = 10;
        const salt = await bycrypt.genSalt(saltRound);

        const bycryptPassword = await bcrypt.hash(password, salt);

        //4. Enter the new user inside our database
        const newUser = await pool.query("INSET INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3)", [name, email, bycryptPassword]);

        //5. Generating our jwt token - we can name it anthing 
        const token = jwtGenerator(newUser.rows[0].user_id)

        res.json(token)
    }

    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
```

## Generating our jwt token

In order to create a jwt token we need to have a secret. We use dotenv to create an enviroment variable with a secrete and create a colder called ``utils`` and a file called ``jwtGenerator.js``;

```javascript
// -- jwtGenerator.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtGenerator() {
    const payload = {
        user: user_id
    }

    return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1h" });
}

module.exports = jwtGenerator;
```

## Buidling our login route

```javascript
//jwtAuth.js

router.post("/login", async (req, res) => {
    try {
        // 1. Destructure req.body
        const { email, password } = req.body;

        // 2. check if user doest exist (if not then we throw eroor)
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
            email
        ]);

        if (user.rows.length === 0) {
            return res.status(401).json("Password or Email Inccorect");
        }

        // 3. Check incoming password is the same as database password
        const validPassword = await bycrpt.compare(password, user.rows[0].user_password);
        
        if (!validPassword) {
            return  res.status(401)send("Username or email is incorrect")
        }

        //4 . Give them jwt token
        const token = jwtGenerator(user.rows[0].user_id)
        res.json({token})
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
```

## Creating our JWT middleware

- Create a new folder called midleware, create a file called ``authorization.js``. This checks our users token to see if it exists and is valid.

```javascript
const jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports = async (req, res, next) => {
    try {
        const jwtToken = req.header("token")

        if (!jwtToken) {
            return res.status(403).json("Not Authorized");
        }

        const payload = jwt.verify(jwtToken, process.env.jwtSecret);

        req.user = payload.user;

    } catch (err) {
        console.error(err.message);
        return res.status(403).json("Not Authorized");
    }
}
```

- Create a file called ``validInfo.js`` in our midlleware directory. This will check if our user is sending valid data to our server.

```javascript
//-- validInfo.js
module.exports = function(req, res, next) {
  const { email, name, password } = req.body;

  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  if (req.path === "/register") {
    if (![email, name, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!validEmail(email)) {
      return res.json("Invalid Email");
    }
  } else if (req.path === "/login") {
    if (![email, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!validEmail(email)) {
      return res.json("Invalid Email");
    }
  }

  next();
};
```

- After building these middleware functions, head over to your routes folder and in ``jwtAuth.js`` import and add the middleware in the routes.

```javascript
// -- At the top
const validInfo from = require('../middleware/validInfo');

router.post('/register', validInfo, async (req, res) => {
    //......
});

router.post('/login', validInfo, async (req, res) => {
    //......
});
```

## Building our private routes

```javascript

//jwtAuth.js
// -- module import at the top
const authorization = require('../middleware/authrization');

router.get('/is-verify', authorization, async (req, res) => {
    try {
        res.json(true)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
```

- Create a new file in the routes folder called ```dashboard.js```.

```javascript
// -- Add route in the index.js
app.use('/dashboard', require('./routes/dashboard.js'));

// -- Create dashboard route in dashboard.js - This can be intercahnged with any private route that you want to initilize
const router = require('express').Router();
const pool = require('../db');
const authorization = require('../middleware/authorization');

router.get('/', authorization, async (req, res) => {
    try {
        //We can get data about the user after authorization - you can capture the role here
        const user = await pool.query("SELECT user_name, user_email  FROM users WHERE user_id = $1", [req.user]);

        res.json(user.rows[0]);
    } catch {
        console.error(err.message)
        res.status(500).json("Server error")
    }
});
```
