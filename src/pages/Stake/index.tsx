import React, { useState } from "react";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCopy } from "@fortawesome/free-solid-svg-icons";
import "./Stake.scss";
import Deposit from "./Deposit";
import Button from "../../component/button";
import Layout from "../../component/Layout";
import LayoutModule from "../../component/layoutModule";

const dropdownItems = [
  "CTC 100",
  "CTC 510",
  "CTC 2010",
  "CTC 5010",
  "CTC 20010",
  "CTC 50010",
];

const Stake: React.FC = () => {
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  const [latestSession, setlatestSession] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleSelect = (item: string) => {
    setlatestSession(item);
    setIsDropdownOpen(false);
  };

  const toggleModal = () => setIsActive(true);

  const rawAddress = "0x73D1043E256367E57aDEb1249B9b91b7f880d282";

  const Address = `${rawAddress.slice(0, 6)}......${rawAddress.slice(-6)}`;

  return (
    <div>
      <Layout>
        <div className="stake-wrapper">
          <div className="stake-container">
            <div className="form-header">
              <div className="flex-between">
                <div className="flex">
                  <img src="" alt="" />
                  <h3>
                    Stake <b style={{ fontSize: "inherit" }}>USDT</b>
                  </h3>
                </div>
                <div>
                  <h3>0 USDT</h3>
                </div>
              </div>
            </div>
            <div className="form-content">
              {!address ? (
                <div></div>
              ) : (
                <div className="drop-down">
                  <div className="dropDownContainer">
                    <div className="container">
                      <div onClick={toggleDropdown} className="selectContent">
                        <div className="selectText">
                          {latestSession || "CTC 100"}
                        </div>
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
              )}

              <div className="flex flex-one">
                <p
                  style={{
                    color: "#777",
                  }}
                >
                  APR
                </p>

                <p>
                  <b>9% - 13%</b>
                </p>
              </div>
              <div className="flex flex-two">
                <p
                  style={{
                    color: "#777",
                  }}
                >
                  Total Staked
                </p>
                <p>
                  <b>100 USDT</b>
                </p>
              </div>
              <hr />

              <div className="connect-wallet-btn">
                {!address ? (
                  <Button varient="primary" onClick={open}>
                    CONNECT WALLET
                  </Button>
                ) : (
                  <Deposit toggleModal={toggleModal} />
                )}
              </div>
            </div>
            {isActive && (
              <LayoutModule
                handleToggle={() => setIsActive(false)}
                className="referral-modal"
              >
                <div className="head">
                  <div>
                    <h4>My Referral</h4>
                  </div>
                  <div>
                    <Button varient="primary">Get Invite Link</Button>
                  </div>
                </div>
                <div className="copy">
                  <div>
                    <h5>referr.._users</h5>
                    <h5>{Address}</h5>
                    <h4>0 CTC</h4>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCopy} />
                  </div>
                </div>
                <div className="level">
                  <h3>MY LEVEL - 0</h3>
                </div>
              </LayoutModule>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Stake;
