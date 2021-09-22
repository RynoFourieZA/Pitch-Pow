import StudentMenu from '../student/studentMenu';

import MentorDashboard from '../mentor/MentorDashboard';

import { Route } from "react-router-dom";

function StudentDashboard() {
	return (
		<main>
            <div className="row main">
                <div className="dashboardNav py-3 container col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    <StudentMenu />
                    <Route path="/student/dashboard" component={MentorDashboard} />
                </div>

                <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9">
                    <div className="">

                    </div>
                </div>
            </div>
		</main>
	);
}

export default StudentDashboard;