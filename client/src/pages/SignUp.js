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
                <div className="">
                    <p>Login and start creating pitches now.</p>
                    <img src={logo} alt="pitch-pwo-logo"/>
                </div>
            </div>

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
                    </div>
                </div>
            </div>
        </div>
    </main>
);

export default SignUp;