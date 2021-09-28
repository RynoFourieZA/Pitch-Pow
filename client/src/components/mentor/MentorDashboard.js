import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//
function MentorDashboard({ setAuth }){
	return (
		<main>
            <h1>I AM MENTOR</h1>
			<button onClick={() => setAuth(false)}></button>
		</main>
	);
}

export default MentorDashboard;