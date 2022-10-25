import React, { useContext } from 'react';
import context  from '../../context';
const Pagination = () => {
    let { pageNumber } = useContext(context)
    let { setCurrentPage } = useContext(context)
    return (
        <>
            <ul className="pagination_list ">
                {pageNumber.map((e) => {
                    return (
                        <li
                            // ref={liRef}
                            className="pagination__item page-link active row hover-shadow"
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