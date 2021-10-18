import React from "react";
import ReactGoogleSlides from "react-google-slides";

const SlideShow = () => {
	return (
		<ReactGoogleSlides
			width={640}
			height={480}
			slidesLink="https://docs.google.com/presentation/d/1vkeGm7M6C0Z9O0-5jPwB9jR3wUA4CLnL68lsadXlhRw/edit"
			slideDuration={5}
			position={1}
			showControls
			loop
		/>
	);
};

export default SlideShow;