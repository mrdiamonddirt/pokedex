import React, {useState} from 'react';
import { PaginationContainer } from './Styles';



const Pagination = ({currentPage, setCurrentPage}) => {
    return (
        <>
        <PaginationContainer>
            <button onClick={() => {
                setCurrentPage(currentPage - 1)
            }}>Prev</button>
            Current Page: {currentPage}
            <button onClick={(() => {
                setCurrentPage(currentPage + 1)
            })}>Next</button>
            </PaginationContainer>
        </>
    )
}

export default Pagination