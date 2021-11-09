// //React Router
// import {
// 	BrowserRouter,
// 	Switch,
// 	Route,
// 	Link,
// 	useLocation
// } from "react-router-dom";

// //
// import { useEffect, useState } from "react";

// //React Components
// import StudentMenu from "../student/studentMenu";
// import MyPitch from "./myPitch";
// import MyProfile from "../student/profile";
// import ChooseYourBusiness from "../student/ChooseYourBusiness";
// import Questions_New from "../Q&A/Questions_New";
// import Questions_Existing from "../Q&A/Questions_Existing";


// function StudentDashboard({ setAuth }) {
// 	const [pitchData, setPitch] = useState([]);;

// 	return location.pathname === "/dashboard/student/create-new-biz-pitch" ? (
// 		<main>
// 			<div className="d-flex">
// 				<div className="dashboardNav py-3 col-sm-12 col-md-12 col-lg-1 col-xl-1">
// 					<StudentMenu setAuth={setAuth} pathName={location.pathname} />
// 				</div>
// 				<div className="col-sm-12 col-md-12 col-lg-11 col-xl-11 overflow-auto">
// 					<div className="d-flex">
// 						<div>
// 							<Questions_New />
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</main>
// 	) : location.pathname === "/dashboard/student/create-exist-biz-pitch" ? (
// 		<main>
// 			<div className="d-flex">
// 				<div className="dashboardNav py-3 col-sm-12 col-md-12 col-lg-1 col-xl-1">
// 					<StudentMenu setAuth={setAuth} pathName={location.pathname} />
// 				</div>
// 				<div className="col-sm-12 col-md-12 col-lg-11 col-xl-11 overflow-auto">
// 					<div className="d-flex">
// 						<div>
// 							<Questions_Existing />
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</main>
// 	) : (
// 		<main>
// 			<div className="d-flex main">
// 				<div className="dashboardNav py-3 container col-sm-12 col-md-12 col-lg-3 col-xl-3">
// 					<StudentMenu setAuth={setAuth} />
// 				</div>

// 				<div className="col-sm-12 col-md-12 col-lg-9 col-xl-9">
// 					<div className="">
// 						<Switch>
// 							<Route path={`/dashboard/student/pitch`} component={MyPitch} />
// 							<Route
// 								path={`/dashboard/student/myprofile`}
// 								component={MyProfile}
// 							/>
// 							<Route
// 								path={`/dashboard/student/create-pitch`}
// 								component={ChooseYourBusiness}
// 							/>
// 						</Switch>
// 					</div>
// 				</div>
// 			</div>
// 		</main>
// 	);
// }

// export default StudentDashboard;
