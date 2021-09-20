//React Router
import { Link } from "react-router-dom";
import BlueButton from '../components/BlueButton';
import uwcLogo from '../assets/images/uwc.png';

const AuthHeaderLogin = () => (
    <header className="">
        <div className="container d-flex justify-content-between">
            <div>
                <Link>
                    <img src={uwcLogo} alt="university-logo"/>
                </Link>
            </div>

            <div className="d-flex gap-1 align-items-center justify-content-center">
                <div className="w-50 d-flex align-items-center">
                    <h6>Already have an account?</h6>
                </div>
                 
                <Link>
                    <BlueButton 
                        href={"/login"} 
                        text={"Login"}
                    />
                </Link>
            </div>
        </div>
    </header>
);

export default AuthHeaderLogin;