import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faPuzzlePiece, faTrophy, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import YellowButton from '../YellowButton';

//
import profileImage from '../../assets/images/brad.png';

export default function StudentMenu() {
    let match = useRouteMatch();

    return (
        <div>
            <div className="text-center pt-4">
                <img src={profileImage} alt="image-of-user" width="100px"/>
                <p className="pt-2">Bradley Mubenga</p>
            </div>

            <div className="py-5">
                <div className="text-start px-5">
                    <ul>
                        <li>
                            <NavLink to={`${match.url}/student/pitch`}><FontAwesomeIcon icon={faFileAlt} /> My Pitch</NavLink>
                        </li>

                        <li>
                            <NavLink to={`${match.url}/student/resources`}><FontAwesomeIcon icon={faPuzzlePiece} /> Resources</NavLink>
                        </li>

                        <li>
                            <NavLink to={`${match.url}/student/competitions`}><FontAwesomeIcon icon={faTrophy} /> Competitions</NavLink>
                        </li>

                        <li>
                            <NavLink to={`${match.url}/student/myprofile`}><FontAwesomeIcon icon={faUserCircle} /> My Profile</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center">
                <YellowButton href={"/logout"} text={"Logout"}/>
            </div>
        </div>
    )
}
