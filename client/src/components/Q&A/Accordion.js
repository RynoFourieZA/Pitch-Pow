import React, { useState, useRef } from "react";
import "../../assets/css/accordion.css";
import Chevron from "./Chevron";
import InputAnswer from "./InputAnswer";

const Accordion = ({ property }) => {
	const [setActive, setActiveState] = useState("");
	const [setHeight, setHeightState] = useState("0px");
	const [setRotate, setRotateState] = useState("accordion-icon");

	const content = useRef(null);

	function toggleAccordion() {
		setActiveState(setActive === "" ? "active" : "");
		setHeightState(
			setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
		);
		setRotateState(
			setActive === "active" ? "accordion-icon" : "accordion-icon rotate"
		);
	}

    const obj = Object.entries(property).flat();
    const objDescription = obj.flat();

	return (
                <div className="accordion_section">
					<button
						className={`accordion ${setActive}`}
						onClick={toggleAccordion}
					>
                        <div className="accordion-block">
						<h4 className="accordion-title">{obj[0]}</h4>
                        <br />
						<h6 className="accordion-accordion-description">{objDescription[1].description}</h6>
                        </div>
						<Chevron className={`${setRotate}`} width={10} fill={"#777"} />
					</button>
					{obj[1].map((item) => (
                    <div
                    key={item.id}
						ref={content}
						style={{ maxHeight: `${setHeight}` }}
						className="accordion-content"
					>
						<div
							className="accordion-text"
							dangerouslySetInnerHTML={{ __html: item.questions }}
						></div>
						<InputAnswer item={item} />
					</div>))}
				</div>
	);
};

export default Accordion;
