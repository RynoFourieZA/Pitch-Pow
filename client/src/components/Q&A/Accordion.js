import React, { useState, useRef } from "react";
import "../../assets/css/accordion.css";
import Chevron from "./Chevron";

const Accordion = ({ questions }) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "" ? "0px" : `${content.current.scrollHeight}px`);
    }
	return (
		<div className="accordion_section">
			<button className={`accordion ${setActive}`} onClick={toggleAccordion}>
				<p className="accordion-title">{questions.description}</p>
                <Chevron width={10} fill={"#777"} />
			</button>
			<div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion-content">
				<div
					className="accordion-text"
					dangerouslySetInnerHTML={{ __html: questions.questions }}
				></div>
			</div>
		</div>
	);
};

export default Accordion;
