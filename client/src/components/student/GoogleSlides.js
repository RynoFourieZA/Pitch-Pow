import React from "react";
import "../../assets/css/stepper.css";
import googleSlide from "../../assets/images/Google-Slides.png";
import powerPoint from "../../assets/images/Microsoft_Office_PowerPoint_(2013–2019).svg.png";

const GoogleSlides = () => {
	return (
		<div className="display-center">
			<section className="rightColumn">
			<div className="container py-5">
				<div>
					<h1 className="heading pb-2">Choose your template</h1>
					<span className="underline"></span>
				</div>

				<div className="d-flex">
					<div 
						className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center"
					>
							<div>
								<div
									className="bizStageBlock text-center"
								>
									<img src={googleSlide} className="img-fluid" width="250px"/>
									<p>Google Slide</p>
								</div>
							</div>
					</div>

					<div 
						className="col-sm-12 col-md-12 col-lg-6 col-xl-6 justify-content-center"
					>
							<div>
								<div
									className="bizStageBlock text-center"
								>
									<img src={powerPoint} className="img-fluid" width="250px"/>
									<p>PowerPoint</p>
								</div>
							</div>
					</div>
				</div>
			</div>
		</section>
		</div>
	);
};

export default GoogleSlides;