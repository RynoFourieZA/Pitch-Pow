import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {IconContext} from "react-icons";
import { AiFillCloseCircle, AiFillDownCircle } from "react-icons/ai";

const QuestionSection = styled.div`
	font-family: "Muli", sans-serif;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    padding: 30px;
    position: relative;
    height: 100vh;
    width: 60%;
    background-color: #fff;
    overflow: hidden; /* so nothing comes out of the container */
    transition: 0.3s ease;
`;

const Container = styled.div`
position: absolute;
top: 20px;
left: 20px;
right: 20px;
background-color: #eeeeed;
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
z-index: 0;
`;

const Wrap = styled.div`
background: #eeeeed;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
cursor: pointer;

h1 {
    padding: 2rem;
    font-size: 2rem;
}

span {
    margin-right: 1rem;
}
`;

const DropDown = styled.div`
background-color: transparent;
color: #2e2a2a;
width: 100%;
height: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;

p {
    font-size: 1rem;
}
`;

function Questions() {
	const [data, setData] = useState([]);
    const [clicked, setClicked] = useState(false);

    async function getQuestions() {
		try {
			const response = await fetch("http://localhost:3100/api/questions", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseRes = await response.json();
			setData(parseRes);

		} catch (e) {
			console.error(e.message);
		}
	}

	useEffect(() => {
		getQuestions();

		(async () => await getQuestions())();
	}, []);

    const toggle= index => {
        if(clicked === index) {
            return setClicked(null);
        }

        setClicked(index);
    }

    return (
        <IconContext.Provider value={{color: "#222359", size: "24px"}}>
                <QuestionSection>
                <Container>
                    { data.map((item, index) => {
                        return (
                            <div>
                                <Wrap onClick={() => toggle(index)} key={index}>
                                    {console.log("My items", item)}
                                <h4>{item.questions}</h4>
                                <span>{clicked === index ? <AiFillDownCircle /> : <AiFillCloseCircle />}</span>
                                </Wrap>
                                {clicked === index ? (
                                <DropDown>
                                <p>{item.description}</p>
                                </DropDown>
                                ) : null}
                            </div>
                        )
                    })}
                </Container>
                </QuestionSection>
            </IconContext.Provider>
    )
}

export default Questions;
