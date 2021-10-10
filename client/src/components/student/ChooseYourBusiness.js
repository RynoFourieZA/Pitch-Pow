import React from "react";
import { Link } from "react-router-dom";
//Images
import newBiz from '../../assets/images/new-biz.png';
import existBiz from '../../assets/images/exist-biz.png';

const ChooseYourBusiness = () => {
    return (
        <section className="rightColumn">
			<div className="container py-5">
				<div>
					<h1 className="heading pb-2">Choose your business stage</h1>
					<span className="underline"></span>
				</div>

				<div className="row">
					<div 
						className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center"
					>
						<Link to="/dashboard/student/create-new-biz-pitch">
							<div>
								<div
									className="bizStageBlock text-center"
								>
									<img src={newBiz} className="img-fluid" width="250px"/>
									<p>New business</p>
								</div>
							</div>
						</Link>
					</div>

					<div 
						className="col-sm-12 col-md-12 col-lg-6 col-xl-6 justify-content-center"
					>
						<Link to="/dashboard/student/create-exist-biz-pitch">
							<div>
								<div
									className="bizStageBlock text-center"
								>
									<img src={existBiz} className="img-fluid" width="250px"/>
									<p>Existing business</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
    )
}

export default ChooseYourBusiness;
