import React, { useState } from "react";
//CSS
import "../assets/css/authPages.css";
//Images
import logo from "../assets/images/pitch-pow-logo.png";
import ceiLogo from "../assets/images/cei-logo.png";
//Components
import AuthHeaderLogin from '../components/authHeaderLogin';
// import YellowButton from '../components/YellowButton';

const SignUp = () => {
    
    const [inputs, setInputs] = useState({
        full_name: "",
        email: "",
        password: "",
        roles: ""
    });

    const {full_name, email, password, roles} = inputs;

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name] : e.target.value});
    };
    
const onSubmitForm = async (e) => {
    e.preventDefault();
    try {

        const body = {full_name, email, password, roles};
        console.log(full_name, email, password, roles);
        const response = await fetch("http://localhost:3100/auth/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        });  

        const parseRes = await response.json();
        console.log(parseRes);

    } catch (err) {
        console.error(err.message);
    };

}

    return (
    <main className="loginPage">
        <div className="row">
            <div 
                className="
                    sideImage 
                    d-flex 
                    flex-column 
                    align-items-center 
                    justify-content-center 
                    col-sm-12 col-md-12 col-lg-4 col-xl-4"
            >
                <div className="text-center">
                    <img src={logo} alt="pitch-pwo-logo" width="75%"/>
                </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <AuthHeaderLogin />
                <div className="d-flex justify-content-center align-tems-center">
                    <div>
                        <div className="text-center">
                            <img src={ceiLogo} alt="cei-logo" width="65px"/>
                            <p className="pt-1">Welcome! Sign up to get started.</p>
                        </div>

                        <form className="d-flex flex-column" onSubmit={onSubmitForm}>
                            <h6 className="mt-1 mb-0">Full Name</h6>
                            <input className="input" type="text" id="full_name" name="full_name" value={full_name} onChange={e => onChange(e)}/>

                            <h6 className="mt-3 mb-0">Email</h6>
                            <input className="input"  type="text" id="email" name="email" value={email} onChange={e => onChange(e)}/>

                            <h6 className="mt-3 mb-0">Role</h6>
                            <div>
                                <select name="roles" id="cars" className="input" value={roles} onChange={e => onChange(e)}>
                                    <option value="student">Student</option>
                                    <option value="mentor">Mentor</option>
                                </select>
                            </div>

                            <h6 className="mt-3 mb-0">Password</h6>
                            <input className="input"  type="password" id="passsword" name="password" value={password} onChange={e => onChange(e)}/>

                            <div className="my-2">
                                <button className="yellowButton">Sign up</button>
                                {/* <YellowButton text={"Sign up"}/> */}
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    </main>
)};

export default SignUp;