import { React, useEffect, useState, useCallback } from "react";
import axios from 'axios';
import "../Stylesheets/DataList.css";
import ListOfcurrent from "./ListOfcurrent";

const DataList = ({count, dateRange, currentPage, setTotalPages, setPageSet}) => {

  const QparaDateconverter=(date)=>{
    let year=date.getFullYear().toString()
    let month=date.getMonth()+1<10? ('0'+((date.getMonth()+1).toString())):((date.getMonth()+1).toString())
    let day=date.getDate()<10? ('0'+(date.getDate().toString())):(date.getDate().toString())
    let temp=`${year}-${month}-${day}`
    // console.log(temp)
    return temp
  }

  const [currentList, setCurrentList] = useState([]);
  useEffect(() => {
    (async()=>{
      let url=`https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=${QparaDateconverter(dateRange[0].startDate)}&todate=${QparaDateconverter(dateRange[0].endDate)}&page=${currentPage}&limit=${count}`
      // console.log(url)
      let filteredData=await axios.get(url)
      setCurrentList(filteredData.data.data.data)
      setTotalPages(filteredData.data.data.pages)
    })()
  }, [dateRange,currentPage,count]);
  
  return (
    <div className="DataList">
      {currentList.length > 0 ? (
        <table className="Table">
          <tr className="TableHead">
            <th>Date</th>
            <th>Day Installs</th>
            <th>Platforms</th>
            <th>Day Uninstalls</th>
            <th>Platforms</th>
            <th>Churn Rate</th>
            <th>Churn Platform</th>
          </tr>
          <ListOfcurrent data={currentList}/>
        </table>
      ) : (
        <h2>Loading....</h2>
      )}
    </div>
  );
};

export default DataList;
