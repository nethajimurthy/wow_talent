import { React, useEffect, useState } from "react";
import "../Stylesheets/DataList.css";

const DataList = ({ Data, count, dateRange, currentPage, resetPageNo}) => {
  const DateFormatConvert = (date) => {
    const newDate = new Date(date).toDateString().split(" ");
    return `${newDate[2]} ${newDate[1]} ${newDate[3]}`;
  };

  const [currentList, setCurrentList] = useState([]);

  const ChangeCurrentList = (largeData) => {
    console.log('current page in datalist  ',currentPage)
    let tempDate=new Date()
    let current = largeData.filter((ele) => {
      tempDate=new Date(ele.created_At)
      return (tempDate >= dateRange[0].startDate && tempDate <= dateRange[0].endDate);
    });
    current=current.slice((currentPage*count)-count,currentPage*count || current.length)
    console.log(currentPage,count,currentPage*count,current.length)
    console.log(current)
    setCurrentList(current);
  };

  useEffect(() => {
    console.log('triggred DataList')
    ChangeCurrentList(Data);
  }, [count,Data,dateRange,currentPage]);

  useEffect(()=>{
    resetPageNo(1)
  },[count])

  return (
    <div className="DataList">
      {Data.length > 0 ? (
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
          {currentList.map((data, index) => {
            return (
              <tr className="EachList" key={index}>
                <td>{DateFormatConvert(data.created_At)}</td>
                <td>{data.totalinstall}</td>
                <td className="Platforms">
                  <ul>
                    <img src={require("../images/ios_logo.png")} alt="ios" />
                    &nbsp; {data.ios_install}
                  </ul>
                  <ul>
                    <img
                      src={require("../images/android_logo.png")}
                      alt="ios"
                    />
                    &nbsp; {data.android_install}
                  </ul>
                </td>
                <td>{data.totaluninstall}</td>
                <td className="Platforms">
                  <ul>
                    <img src={require("../images/ios_logo.png")} alt="ios" />
                    &nbsp; {data.ios_uninstall}
                  </ul>
                  <ul>
                    <img
                      src={require("../images/android_logo.png")}
                      alt="ios"
                    />
                    &nbsp; {data.android_uninstall}
                  </ul>
                </td>
                <td>{data.totalchurn}%</td>
                <td className="Platforms">
                  <ul>
                    <img src={require("../images/ios_logo.png")} alt="ios" />
                    &nbsp; {data.ios_churn}%
                  </ul>
                  <ul>
                    <img
                      src={require("../images/android_logo.png")}
                      alt="ios"
                    />
                    &nbsp; {data.android_churn}%
                  </ul>
                </td>
              </tr>
            );
          })}
        </table>
      ) : (
        <h2>Loading....</h2>
      )}
    </div>
  );
};

export default DataList;
