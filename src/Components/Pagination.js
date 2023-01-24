import {React,useEffect,useState} from "react";

const Pagination = ({ listCount, dateRange, ChangePage, dataCount }) => {
  
    const [page,setPage]=useState(Math.ceil(dataCount / listCount))
    useEffect(()=>{
        setPage(Math.ceil(dataCount / listCount));
    },[listCount,dateRange,dataCount])
  
  return (
    <div className="PagesIcon">
      {[...Array(page)].map((ele, index) => {
        return (
          <ul
          className='Clickable'
            onClick={() => {
              ChangePage(index+1);
            }}
          >
            {index + 1}
          </ul>
        );
      })}
    </div>
  );
};

export default Pagination;
