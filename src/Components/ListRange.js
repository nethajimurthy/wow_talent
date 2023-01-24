import React from "react";

const ListRange = ({ SetRange }) => {
    
  const HandleChange = (range) => {
    SetRange(range);
  };

  return (
    <div>
        Show &nbsp;
        <select className="DropDown" onChange={(e)=>HandleChange(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
        </select>
        &nbsp; Entries
    </div>
  );
};

export default ListRange;
