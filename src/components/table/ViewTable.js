import React from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import Pagination from './Pagination';


const defalutSetRow = (row) => {
  return null
}
const defaultGroupHandler = (page) => {
  return [page];
}
const renderDefaultGroup = (page) => {
  return <></>;

}


const ViewTable = ({ columns, data, size = 8, isLoading, isShowPagination = true, className, rowNum = 4, setRowPros = defalutSetRow, onGroup = defaultGroupHandler, renderGroup = renderDefaultGroup }) => {

  const {
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: size,
        // sortBy: [sortBy]
      },
      autoResetPage: false,
    },
    useSortBy,
    usePagination,
  );

  let groups = onGroup(page);




  return (
    <div className={['view_table_div', className].join(" ")}>
      {isLoading ? <div>Loading...</div> : <>
        {
          groups.length > 0 ?
            <>
              {
                groups?.map((page, index) => {

                  return (
                    <div className='view_gropu_div' key={`page_${index}`}>
                      <div className="view_goup">{
                        renderGroup(page)
                      }
                      </div>
                      <div className='view_case'>
                        {
                          page.map((row, i) => {
                            prepareRow(row)
                            return (
                              <ul className={['view_card', `flex_width_${rowNum}`].join(" ")} {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                  return <li className={cell.column.className}  {...cell.getCellProps()}>{cell.render('Cell')}</li>
                                })}
                              </ul>
                            )
                          })
                        }
                      </div>
                    </div>
                  )
                })
              }

            </>
            : <div className="no-data-text">No Records</div>
        }
        {
          (isShowPagination) && <div className="pagination-div-right">
            <Pagination
              className={"pr-10"}
              pageSize={pageSize}
              setPageSize={setPageSize}
              canPreviousPage={canPreviousPage}
              canNextPage={canNextPage}
              pageOptions={pageOptions}
              pageCount={pageCount}
              gotoPage={gotoPage}
              nextPage={nextPage}
              previousPage={previousPage}
              pagesizeoptions={[8, 16, 24, 32, 40]}
              pageIndex={pageCount < pageIndex ? 0 : pageIndex}
            />

          </div>
        }
      </>}

    </div >
  );
};

export default ViewTable;