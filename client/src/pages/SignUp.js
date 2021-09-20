//CSS
import "../assets/css/authPages.css";
//Images
import logo from "../assets/images/pitch-pow-logo.png";
import ceiLogo from "../assets/images/cei-logo.png";
//Components
import AuthHeader from '../components/authHeader';
import YellowButton from '../components/YellowButton';

const SignUp = () => (
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
                <AuthHeader />
                <div className="d-flex justify-content-center align-tems-center">
                    <div>
                        <div className="text-center">
                            <img src={ceiLogo} alt="cei-logo" width="65px"/>
                            <p className="pt-1">Welcome! Sign up to get started.</p>
                        </div>

                        <form className="d-flex flex-column">
                            <h6 className="mt-1 mb-0">Full Name</h6>
                            <input className="input" type="text" id="full_name" name="full_name" />

                            <h6 className="mt-3 mb-0">Email</h6>
                            <input className="input"  type="text" id="email" name="email" />

                            <h6 className="mt-3 mb-0">Role</h6>
                            <div>
                                <select name="role" id="cars" className="input">
                                    <option value="Student">Student</option>
                                    <option value="Mentor">Mentor</option>
                                </select>
                            </div>

                            <h6 className="mt-3 mb-0">Password</h6>
                            <input className="input"  type="password" id="email" name="password" />

                            <div className="my-2">
                                <YellowButton text={"Sign up"}/>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    </main>
);

export default SignUp;