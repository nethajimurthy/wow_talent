import { React, useEffect } from "react";
import "../Stylesheets/DataList.css";

const ListOfcurrent = ({ data }) => {
  const DateFormatConvert = (date) => {
    const newDate = new Date(date).toDateString().split(" ");
    return `${newDate[2]} ${newDate[1]} ${newDate[3]}`;
  };

  return (
    <>
      {data.map((data, index) => {
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
                <img src={require("../images/android_logo.png")} alt="ios" />
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
                <img src={require("../images/android_logo.png")} alt="ios" />
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
                <img src={require("../images/android_logo.png")} alt="ios" />
                &nbsp; {data.android_churn}%
              </ul>
            </td>
          </tr>
        );
    })}
    </>
  );
};

export default ListOfcurrent;
