import React, { useEffect, useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faPinterest,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../assets/logo/logo.png";
import Button from "../button";
import "./Hero.scss";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero-wrapper" id="home">
      <div className="social-media-icons">
        <div className="icon">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faPinterest} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faTelegram} />
        </div>
      </div>
      <div className="mx">
        <div className="hero-container">
          <div className="image-resonsive">
            <img src={Logo} alt="" />
          </div>
          <div className="content">
            <h3>
              Collect Next<span> Generation crowd trade capital </span>Today
            </h3>
            <p>
              crowd trade capital is a global Cryptocurrency Ecosystem, whose members help each
              other to achieve financial well-being using our tools and algorithm of instant profit
              distribution on smart contracts.
            </p>
            <div className="btns">
              <Button varient="primary">GET CONNECTED</Button>
              {/* <div className="btn-responsive">
                <div className="wallet-address">
                  <div className="wallet-address-input">
                    <input
                      type="text"
                      name="wallet Address"
                      placeholder="Enter ID/Wallet Address"
                    />
                  </div>
                </div>
                <Link to="/preview/dashboard">
                  <Button varient="primary">PREVIEW</Button>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="image">
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
      {isVisible && (
        <div className="top-scrolling" onClick={scrollToTop}>
          <div className="flex-item top-scrolling-icon">
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
