import React,{useEffect, useMemo, useState} from 'react';
import cssData from './cssData.json';
import * as CssDemo from '../../components/cssDemo'
import ViewTable from '../../components/table/ViewTable';
import Card from '../../components/card/Card';
import Tag from '../../components/tag/Tag';

const CssView = ({className}) => {
    let [data,setData]=useState(cssData);
    let [isDetail,setIsDetail]=useState(false);
    useEffect(()=>{
        setData(cssData)
    },[])
    const openHandler = (row)=>{
        let index=row.index;
        let seletedData = cssData[index];
        if(row.original.component){
            setIsDetail(true)
            setData([seletedData])
        }
        
    }

    const columns = useMemo(
        () => [
          {
            accessor: 'component',
            Cell: ({ row }) => {
                let Demo = CssDemo[row.original.component]
                console.log('Demo',Demo);
                
              return <Card onOpen={()=>openHandler(row)} isDetail={isDetail} isdiabled={Demo?false:true}>
                {Demo?<Demo color={"#fff"}/>:<div>Error</div>}
                </Card>
            }
          },
          {
            accessor: 'tags',
            className:'card_tags',
            Cell: ({ row }) => {
              return row.original.tags?.map((tag,index)=>{
                return <Tag text={tag} key={`${row.original.component}_${tag}_${index}`} className="mr-5"/>
              })
            }
          },
    
    
        ], [isDetail]);

    return (
        <div className={['css_view_div',className].join(" ")}>
            <ViewTable data={data} columns={columns} className={["mt-10",isDetail?'view_detial':''].join(" ")}/>
        </div>
    );
};

export default CssView;