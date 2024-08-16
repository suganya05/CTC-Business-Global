import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-container">
        <Link to="/dashboard" onClick={() => handleLinkClick("home")}>
          <div
            className={`sidebar-content ${
              activeLink === "home" ? "active" : ""
            }`}
          >
            <div>
              <FontAwesomeIcon icon={faHouseChimney} />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>
        <Link to="/stake" onClick={() => handleLinkClick("stake")}>
          <div
            className={`sidebar-content ${
              activeLink === "stake" ? "active" : ""
            }`}
          >
            <div>
              <p>Stake</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
