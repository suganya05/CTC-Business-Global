import React, { useState } from "react";
import Button from "../../component/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

interface IDeposit {
  toggleModal: () => void;
}

const dropdownItems = [
  "CTC 100",
  "CTC 510",
  "CTC 2010",
  "CTC 5010",
  "CTC 20010",
  "CTC 50010",
];

const Deposit: React.FC<IDeposit> = ({ toggleModal }) => {
  const [activeTab, setActiveTab] = useState<string>("Live");
  const [latestSession, setlatestSession] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleSelect = (item: string) => {
    setlatestSession(item);
    setIsDropdownOpen(false);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="flex-drop">
        <p
          style={{
            color: "#777",
          }}
        >
          Deposit
        </p>
        <div className="dropDownContainer">
          <div className="container">
            <div onClick={toggleDropdown} className="selectContent">
              <div className="selectText">{latestSession || "CTC 360"}</div>
              <div>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
            {isDropdownOpen && (
              <div className="selectDropDownList">
                {dropdownItems.map((item, index) => (
                  <div key={index} onClick={() => handleSelect(item)}>
                    <div className="selectListText">{item}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-two">
        <input type="text" placeholder="0.0" />
      </div>
      <div
        className="flex-item connect-wallet-btn"
        style={{ marginBottom: "24px" }}
      >
        <Button varient="primary">Deposit</Button>
      </div>
      <hr />
      <div className="staked">
        <div className="staked-content">
          <div>
            <h3>Staked</h3>
          </div>
          <div className="content">
            <p
              onClick={() => handleTabClick("Live")}
              style={{ background: activeTab === "Live" ? "#00d7eb" : "black" }}
            >
              Live
            </p>
            <p
              onClick={() => handleTabClick("Finished")}
              style={{
                background: activeTab === "Finished" ? "#00d7eb" : "black",
              }}
            >
              Finished
            </p>
          </div>
        </div>
        <div className="histories">
          <p>No Histories Found</p>
        </div>
      </div>
      <hr />
      <div className="end">
        <div className="referral" onClick={toggleModal}>
          <p>Referral</p>
        </div>
        <div className="view-contract">
          <h5>View Contract</h5>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
      </div>
    </div>
  );
};

export default Deposit;
