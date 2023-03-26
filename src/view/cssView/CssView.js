import React, { useEffect, useMemo, useState } from 'react';
import cssData from './cssData.json';
import * as CssDemo from '../../components/cssDemo'
import ViewTable from '../../components/table/ViewTable';
import Card from '../../components/card/Card';
import Tag from '../../components/tag/Tag';

const CssView = ({ className }) => {
  let [data, setData] = useState(cssData);
  let [isDetail, setIsDetail] = useState(false);
  useEffect(() => {
    setData(cssData)
  }, [])
  const openHandler = (row) => {
    let index = row.index;
    let seletedData = cssData[index];
    if (row.original.component) {
      setIsDetail(true)
      setData([seletedData])
    }

  }
  const closeHandler = () => {
    setIsDetail(false)
    setData([...cssData])
  }

  const columns = useMemo(
    () => [
      {
        accessor: 'component',
        Cell: ({ row }) => {
          let Demo = CssDemo[row.original.component]

          return <Card name={row.original.component} onOpen={() => openHandler(row)} data={row.original} isDetail={isDetail} isdiabled={Demo ? false : true} onClose={closeHandler}>
            {Demo ? <Demo {...row.original.props} /> : <div>Error</div>}
          </Card>
        }
      },
      {
        accessor: 'tags',
        className: 'card_tags',
        Cell: ({ row }) => {
          return row.original.tags?.map((tag, index) => {
            return <Tag text={tag} key={`${row.original.component}_${tag}_${index}`} className="mr-5" />
          })
        }
      },


    ], [isDetail]);

  return (
    <div className={['css_view_div', className].join(" ")}>
      <ViewTable data={data} columns={columns} className={["mt-15", isDetail ? 'view_detial' : ''].join(" ")} />
    </div>
  );
};

export default CssView;