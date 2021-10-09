import React, { useState, useEffect} from "react";

const Questions_New = () => {
    const [answer, setAnswer] = useState("");
	const [data, setData] = useState([]);

    async function getQuestions() {
		try {
			const response = await fetch("http://localhost:3100/api/questions", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseRes = await response.json();
            const newData = parseRes.filter(item => item.pitch_type_name === "New")
            console.log(newData);
			setData(parseRes);
            console.log(parseRes);

		} catch (e) {
			console.error(e.message);
		}
	}

	useEffect(() => {
		(async () => await getQuestions())();
	}, []);


    return (
        <div className="container mt-5">
    <div className="d-flex justify-content-center row">
        <div className="col-md-10 col-lg-10">
            <div className="border">
                <div className="question bg-white p-3 border-bottom">
                    <div className="d-flex flex-row justify-content-between align-items-center mcq">
                        <h4>MCQ Quiz</h4><span>(5 of 20)</span>
                    </div>
                </div>
                <div className="question bg-white p-3 border-bottom">
                    <div className="d-flex flex-row align-items-center question-title">
                        <h3 className="text-danger">Q.</h3>
                        <h5 className="mt-1 ml-2">Which of the following country has largest population?</h5>
                    </div>
                    <div className="ans ml-2">
                        <label className="answer"> <input type="answer" name="answer" value={answer} onChange={e => setAnswer(e.target.value)}/>
                        </label>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white"><button className="btn btn-primary d-flex align-items-center btn-danger" type="button"><i className="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous</button><button className="btn btn-primary border-success align-items-center btn-success" type="button">Next<i className="fa fa-angle-right ml-2"></i></button></div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Questions_New;