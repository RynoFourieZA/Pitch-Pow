-- Inserting the roles of the users.
INSERT INTO roles (name) VALUES ('Student');

INSERT INTO roles (name) VALUES ('Mentor');

INSERT INTO roles (name) VALUES ('Administration');

-- Inserting into students.
INSERT INTO students (Full_name, Email, Password, Roles) VALUES ('Aitken Fortuin', 'aitkenf115@gmail.com', '20Aitken21cyf', '1');

INSERT INTO students (Full_name, Email, Password, Roles) VALUES ('Bradley Mubenga', 'mubengaBradley@gmail.com', '20Bradley21cyf', '1');

INSERT INTO students (Full_name, Email, Password, Roles) VALUES ('Ryno Fourie', 'rjrfourie@outlook.com', '20Ryno21cyf', '1');

INSERT INTO students (Full_name, Email, Password, Roles) VALUES ('Shawen Harker', 'harkershawen@gmail.com', '20Shawen21cyf', '1');

INSERT INTO mentors (Full_name, Email, Password, Roles ) VALUES ('Sharad Parbhoo', 'parbster@gmail.com', '20Sharad21cyf', 2);

INSERT INTO mentors (Full_name, Email, Password, Roles) VALUES ('Lana Franks', 'lfranks@uwc.ac.za', '20Sharad21cyf', 2);

INSERT INTO mentors (Full_name, Email, Password, Roles) VALUES ('Emma Keet', 'keetemma@gmail.com', '20Emma21cyf', 3);