import {React,useEffect,useState} from "react";

const Pagination = ({ listCount, dateRange, ChangePage, dataCount }) => {

  const [pageNums,setPageNums]=useState(1)
    const [page,setPage]=useState(Math.ceil(dataCount / listCount))
    useEffect(()=>{
        setPage(Math.ceil(dataCount / listCount));
        setPageNums(1)
    },[listCount,dateRange,dataCount])
  
  return (
    <div className="PagesIcon">
      <ul onClick={()=>setPageNums((pre)=>{
        return pre>1? pre-1:1})}>&lt;&lt;</ul>
      {[...Array(page)].map((ele, index) => {
        if(index+1 > (pageNums*5)-5 && index+1 <=(pageNums*5))
        return (
          <ul
            onClick={() => {
              console.log('tr from pagination  ',index+1)
              ChangePage(index+1);
            }}
          >
            {index + 1}
          </ul>
        );
      })}
      <ul onClick={()=>setPageNums((pre)=>{
        return pre<page/5? pre+1:pre})}>&gt;&gt;</ul>
    </div>
  );
};

export default Pagination;
