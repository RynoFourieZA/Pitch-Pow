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
                        <p>Already a user? <Link to="/login" >Sign in</Link></p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                    <div>
                        <form>
                            <input type="text" id="fname" name="fname" />
                            <input type="text" id="lname" name="lname" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
);

export default SignUp;