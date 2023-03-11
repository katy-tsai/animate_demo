import React from "react";

const ViewTable = ({ columns, data, size = 10, isShowPagination = true, className, isLoading = false, isSorted = false }) => {
  const {
    getTableProps,
    getTableBodyProps,
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
      initialState: { pageIndex: 0, pageSize: size },
    },
    useSortBy,
    usePagination
  );
  return (
    <div className="view_table">
      <div></div>
      {isShowPagination && pageCount > 1 && (
        <div className="pagination-div-right mt-10 mb-30">
          <Pagination 
          canPreviousPage={canPreviousPage} 
          canNextPage={canNextPage} 
          pageOptions={pageOptions} 
          pageCount={pageCount} 
          gotoPage={gotoPage} 
          nextPage={nextPage} 
          previousPage={previousPage} 
          pageIndex={pageIndex} 
          total={data.length} 
          setPageSize={setPageSize} 
          pageSize={pageSize} />
        </div>
      )}
    </div>
  );
};

export default ViewTable;
