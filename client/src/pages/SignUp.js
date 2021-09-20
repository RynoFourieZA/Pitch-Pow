//React Router
import { Link } from "react-router-dom";
//CSS
import "../assets/css/signup.css";
//Images
import logo from "../assets/images/pitch-pow-logo.png";

const SignUp = () => (
    <main className="">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <div>
                        <img src={logo} alt="pitch-pow-logo" className="img-fluid" />
                    </div>
                    <div>
                        <p>Already a user? <Link>Sign in</Link></p>
                    </div>
                </div>

<<<<<<< HEAD
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                    <div>
                        <form>
                            <input type="text" id="fname" name="fname" />
                            <input type="text" id="lname" name="lname" />
                        </form>
=======
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <AuthHeader />
                <div className="d-flex justify-content-center">
                    <div>
                        <div className="text-center">
                            <img src={ceiLogo} alt="cei-logo" width="65px"/>
                            <p className="pt-3">Welcome! Sign up to get started.</p>
                        </div>

                        <form className="d-flex flex-column">
                            <p className="mt-3 mb-0">Full Name</p>
                            <input className="input" type="text" id="full_name" name="full_name" />

                            <p className="mt-3 mb-0">Email</p>
                            <input className="input"  type="text" id="email" name="email" />

                            <p className="mt-3 mb-1">Role</p>
                            <div>
                                <select name="role" id="cars" className="input">
                                    <option value="Student">Student</option>
                                    <option value="Mentor">Mentor</option>
                                </select>
                            </div>

                            <p className="mt-3 mb-0">Password</p>
                            <input className="input"  type="password" id="email" name="password" />

                            <div className="my-2">
                                <YellowButton text={"Sign up"}/>
                            </div>
                        </form> 
>>>>>>> parent of bf357d0 (Login and Signup Page Completed)
                    </div>
                </div>
            </div>
        </div>
    </main>
);

export default SignUp;