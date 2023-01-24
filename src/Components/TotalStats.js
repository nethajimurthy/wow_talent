import { React, useState, useEffect } from "react";
import axios from "axios";
import "../Stylesheets/TotalStats.css";

const URL =
  "https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=2022-07-01&todate=2022-07-14";

const TotalStats = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    (async () => {
      axios
        .get(URL)
        .then((res) => {
          setStats(res.data.data);
        })
        .catch((err) => {
          console.log(`Error: ${err.message}`);
        });
    })();
  }, []);

  return (
    <div className="TotalStats">
      {Object.keys(stats).length ? (
        <div className="Stat_items">
          <ul>
            <img src={require("../images/install_logo.png")} alt="installed" />
            <p>{stats.totalInstall}<br/><h6>App installed</h6></p>
          </ul>
          <ul>
            <img src={require("../images/user_logo.png")} alt="user" />
            <p>{stats.activeinstall}<br/><h6>Active installs</h6></p>
          </ul>
          <ul>
            <img src={require("../images/graph_logo.png")} alt="graph" />
            <p>{stats.churn}%<br/><h6>Churn Rate</h6></p>
          </ul>
          <ul>
            <img
              src={require("../images/uninstall_logo.png")}
              alt="uninstalled"
            />
            <p>{stats.totaluninstall}<br/><h6>App Un-installed</h6></p>
          </ul>
          <ul>
            <img
              src={require("../images/active_users_logo.png")}
              alt="active_users"
            />
            <p>{stats.aliveappusers}<br/><h6>Alive App-users</h6></p>
          </ul>
          <ul>
            <img src={require("../images/graph_logo.png")} alt="graph2" />
            <p>{stats.alivechurn}% <br/><h6>Churn Rate</h6></p>
          </ul>
        </div>
      ) : (
        <h2>Loading....</h2>
      )}
    </div>
  );
};

export default TotalStats;
