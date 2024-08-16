import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "../button";
import Logo from "../../assets/logo/logo.png";
import ResponsiveHeader from "../ResponsiveHeader";
import "./Header.scss";

const Header: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";

      return () => {
        document.body.style.overflowY = "auto";
      };
    }
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrolling = scrollTop > 0;

      setScrolling(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`header-wrapper ${scrolling ? "scrolled" : ""}`}>
        <div className="mx">
          <div className="header-container">
            <div className={`logo ${scrolling ? "scolled-logo" : ""}`}>
              <img src={Logo} alt="" />
            </div>
            <div className="nav">
              <div className="nav-list">
                <div>
                  <a href="#home">Home</a>
                </div>
                <div>
                  <a href="#about">About</a>
                </div>
                <div>
                  <a href="#services">Services</a>
                </div>
                <div>
                  <a href="#faq">FAQ</a>
                </div>
              </div>
              <div className="flex-item menu">
                <div className="btn">
                  <Link to="/login">
                    <Button varient="primary">JOIN NOW</Button>
                  </Link>
                </div>
                <div className="menu-icon" onClick={handleToggleMenu}>
                  <FontAwesomeIcon icon={faBars} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveHeader setOpen={setOpen} open={open} />
    </>
  );
};

export default Header;
