import React from "react";

const PaginationMentor = ({ questionPerPage, totalQuestions, paginate }) => {
    const pageNumbers = [];


    for(let i = 1; i <= Math.ceil(totalQuestions / questionPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onCLick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default PaginationMentor;
