import { React, useState, useEffect } from "react";
import "../Stylesheets/UserStats.css";
import ListRange from "./ListRange";
import DateRangeSelection from "./DateRange";
import DataList from "./DataList";
import Pagination from "./Pagination";
import axios from "axios";

const UsersStats = () => {
  const [showDate, setShowDate] = useState(false);
  const [dataLength,setDataLength]=useState(0)
  const [listRange, setListRange] = useState(5);
  const [listData, setListData] = useState([]);
  const [pageNo,setPageNo] = useState(1)
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date('04-02-2022'),
      endDate: new Date('07-24-2022'),
      key: "selection",
    },
  ]);

  const ShowDate = () => {
    setShowDate(true);
  };

  const CloseDate = () => {
    setShowDate(false);
  };

  const URL ="https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-06-01&todate=2022-07-01";

  useEffect(() => {
    (() => {
      axios
        .get(URL)
        .then((res) => {
          setListData(res.data.data.data)
          setDataLength(res.data.data.data.length)
        })
        .catch((err) => {
          console.log(`Error: ${err.message}`);
        });
       
      })();
  },[]);

  return (
    <div className="UserStats">
      <div className="Top">
        <ListRange SetRange={setListRange} />
        <div onClick={() => ShowDate()} className="DateField">
          Select Duration
        </div>
        {showDate? (<>
          <DateRangeSelection
            dateRange={dateRange}
            SetDateRange={setDateRange}
            id="Date"
            CloseDate={CloseDate}
            />
            </>)
             : null}
      </div>
        <DataList Data={listData} count={listRange} dateRange={dateRange} currentPage={pageNo}/>
        <Pagination listCount={listRange} dateRange={dateRange} ChangePage={setPageNo} dataCount={dataLength}/>
    </div>
  );
};

export default UsersStats;
