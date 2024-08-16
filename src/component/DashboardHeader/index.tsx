import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/logo/logo.png";
import Button from "../button";
import { useAccount, useDisconnect } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import "./DashboardHeader.scss";
import { Link } from "react-router-dom";

const DashboardHeader: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();

  const handleToggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="dashboard-header-wrapper">
      <div className="flex-item dashboard-container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="menu">
          <div className="logout-btn">
            {!address ? (
              <Button varient="primary" onClick={open}>
                CONNECT WALLET
              </Button>
            ) : (
              <Button varient="primary" onClick={disconnect}>
                LOGOUT
              </Button>
            )}
          </div>
          <div className="menu-icon" onClick={handleToggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      <ResponsiveDashboardHeader setOpen={setOpen} isOpen={isOpen} />
    </div>
  );
};

export default DashboardHeader;

interface IResponsiveDashboardHeader {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const ResponsiveDashboardHeader: React.FC<IResponsiveDashboardHeader> = ({
  setOpen,
  isOpen,
}) => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <div
      className={
        isOpen ? "responsive-header-link active" : "responsive-header-link"
      }
    >
      <div className="nav-link">
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
