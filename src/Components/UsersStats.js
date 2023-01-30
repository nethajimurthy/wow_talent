import { React, useState, useEffect } from "react";
import "../Stylesheets/UserStats.css";
import ListRange from "./ListRange";
import DateRangeSelection from "./DateRange";
import DataList from "./DataList";
import Pagination from "./Pagination";

const UsersStats = () => {
  const [showDate, setShowDate] = useState(false);
  const [listRange, setListRange] = useState(5);
  const [currentPage, setCurrentPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSet, setPageSet] = useState(1);

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date("04-01-2022"),
      endDate: new Date("08-25-2022"),
      key: "selection",
    },
  ]);

  const ChangeListRange = (range) => {
    setListRange(range);
    setCurrentPageNo(1);
    setPageSet(1);
  };

  const DateFormat = (date) => {
    let temp =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    return temp;
  };

  const ShowDate = () => {
    setShowDate(true);
  };

  const CloseDate = () => {
    setShowDate(false);
  };

  return (
    <div className="UserStats">
      <div className="Top">
        <ListRange SetRange={ChangeListRange} />
        <div onClick={() => ShowDate()} className="DateField">
          {DateFormat(dateRange[0].startDate)} -{" "}
          {DateFormat(dateRange[0].endDate)}
        </div>
        {showDate ? (
          <>
            <DateRangeSelection
              setCurrentPageNo={setCurrentPageNo}
              setPageSet={setPageSet}
              dateRange={dateRange}
              SetDateRange={setDateRange}
              id="Date"
              CloseDate={CloseDate}
            />
          </>
        ) : null}
      </div>
      <DataList
        count={listRange}
        dateRange={dateRange}
        currentPage={currentPage}
        setTotalPages={setTotalPages}
        setPageSet={setPageSet}
      />
      <Pagination
        totalCount={totalPages}
        setCurrentPage={setCurrentPageNo}
        pageSet={pageSet}
        setPageSet={setPageSet}
      />
    </div>
  );
};

export default UsersStats;
