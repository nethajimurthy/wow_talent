import { React } from "react";

const Pagination = ({ totalCount, setCurrentPage, pageSet, setPageSet}) => {

return (
    <div className="PagesIcon">
      <ul
        onClick={() =>
          setPageSet((pre) => {
            return pre > 1 ? pre - 1 : 1;
          })
        }
      >
        &lt;&lt;
      </ul>
      {[...Array(totalCount)].map((ele, index) => {
        if(index>=(pageSet*5)-5 && index<pageSet*5)
          return (
            <ul
              onClick={() => {
                // console.log("tr from pagination  ", index + 1);
                setCurrentPage(index + 1);
              }}
            >
              {index + 1}
            </ul>
          );
      })}
      <ul
        onClick={() =>
          setPageSet((pre) => {
            return pre < Math.ceil(totalCount/5)? pre+1 : pre;
          })
        }
      >
        &gt;&gt;
      </ul>
    </div>
  );
};

export default Pagination;
