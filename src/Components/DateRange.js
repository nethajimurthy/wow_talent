import { React, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../Stylesheets/DatePopup.css";

const DateRangeSelection = ({ dateRange, SetDateRange, CloseDate,setPageSet, setCurrentPageNo }) => {
  const [range, setRange] = useState(dateRange);

  const Apply = () => {
    setPageSet(1)
    setCurrentPageNo(1)
    SetDateRange(range);
    CloseDate();
  };

  return (
    <>
    <div className="Overlayer" onClick={() => CloseDate()}/>
    <div 
    className="Calender">
      <DateRangePicker
      className="DateRangePicker"
        onChange={(date) => setRange([date.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        minDate= {new Date('04-01-2022')}
        maxDate={new Date('08-24-2022')}
        ranges={range}
        direction="vertical"
        scroll={{ enabled: true }}
        />
      <button onClick={Apply}>Apply</button>
      <button onClick={() => CloseDate()}>Cancel</button>
    </div>
  </>
  );
};

export default DateRangeSelection;
