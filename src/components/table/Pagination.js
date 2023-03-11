import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';

const Pagination = ({ previousPage, nextPage, canPreviousPage, canNextPage, pageIndex, setPageSize, pageOptions, pagesizeoptions = [5, 10, 20, 30, 50], gotoPage, pageSize }) => {
  // const { t } = useTranslation();
  const [pageBtns, setPageBtns] = useState([]);

  const getPageBtns = (pageOptions, pageIndex) => {
    if (pageOptions.length <= 6) {
      setPageBtns(pageOptions);
    } else {
      const lastBtn = pageOptions.length;
      if (pageIndex < 4) {
        setPageBtns([0, 1, 2, 3, 4, null, lastBtn - 1]);
      } else if (lastBtn - pageIndex < 5) {
        setPageBtns([0, null, lastBtn - 5, lastBtn - 4, lastBtn - 3, lastBtn - 2, lastBtn - 1]);
      } else {
        setPageBtns([0, null, pageIndex - 2, pageIndex - 1, pageIndex, pageIndex + 1, pageIndex + 2, null, lastBtn - 1]);
      }

    }
  }
  useEffect(() => {
    getPageBtns(pageOptions, pageIndex);
  }, [pageOptions, pageIndex]);

  return (
    <ul className="pagination">

      <li onClick={() => previousPage()} className={['preivous', canPreviousPage ? '' : 'disabled'].join(" ")}>
        {'<'}
      </li>
      {
        pageBtns.map((btn, index) => {
          return btn === null ? <li key={`pagination_btn_${index}`} >...</li> : <li key={`pagination_btn_${index}`} className={[btn === pageIndex ? 'active' : ''].join(" ")} onClick={() => gotoPage(btn)}>{btn + 1}</li>
        })
      }
      <li onClick={() => nextPage()} className={['next', canNextPage ? '' : 'disabled'].join(" ")}>
        {'>'}
      </li>
      {/* 
      {pageOptions.length > 5 && <div className="pagination_gotopage ">
        {t("JumptoPage")}
        <input
          className="ml-5"
          type="number"
          min="1"
          max={pageOptions.length}
          value={pageIndex + 1}
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            gotoPage(page)
          }}
        />

      </div>} */}
      {/* {pageSize && <li className="pagesize_select " >
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {pagesizeoptions.map(pageSize => (
            <option key={pageSize} value={pageSize}>
              {`${pageSize} / Page`}
            </option>
          ))}
        </select>
      </li>} */}
    </ul>
  );
};

export default Pagination;