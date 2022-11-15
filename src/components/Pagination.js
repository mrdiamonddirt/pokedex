import React from 'react';

const Pagination = ({currentPage, setCurrentPage}) => {
    return (
        <>
            <button onClick={() => {
                setCurrentPage(currentPage - 1)
            }}>Prev</button>
            Current Page: {currentPage}
            <button onClick={(() => {
                setCurrentPage(currentPage + 1)
            })}>Next</button>
        </>
    )
}

export default Pagination