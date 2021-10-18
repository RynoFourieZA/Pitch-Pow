import React from "React";

const DeleteAnswer = () => {

    const deleteQues = async () => {
        try {
          const res = await fetch("/api/answers_v2/delete", {
						method: "PUT",
						headers: { jwt_token: sessionStorage.token },
					});
    
          const parseData = await res.json();
          console.log(parseData);
          setAllQuestionsAndAnswers(parseData);
    
          setUserQuestionAndAnswer(parseData[0].created_by);
        } catch (err) {
          console.error(err.message);
        }
      };

      useEffect(() => {
        deleteQues();
      }, []);
    return (
        <div>

        </div>
    )
}

export default DeleteAnswer;
