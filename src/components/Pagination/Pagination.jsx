import React, { useContext } from 'react';
import context from '../../context';
const Pagination = ({ themeColor }) => {
    let { pageNumber } = useContext(context)
    let { setCurrentPage } = useContext(context)
    // console.log(color)
    // console.log(color)

    return (
        <>
            <ul className="pagination_list ">
                {pageNumber.map((e) => {
                    return (
                        <li
                            // ref={liRef}
                            className="pagination__item page-link active row hover-shadow"
                            id={themeColor}
                            onClick={
                                () => setCurrentPage(e)}>
                            {e}
                            
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Pagination;