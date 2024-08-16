import React from "react";
import FooterLogo from "../../assets/logo/logo.png";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="mx">
          <div className="flex-item footer-container">
            <div className="flex-item content-first">
              <div className="logo">
                <img src={FooterLogo} alt="" />
              </div>
              <div className="description">
                <p>
                  A new way to make the payments easy, reliable and 100% secure. claritatem
                  itamconse quat. Exerci tationulla
                </p>
              </div>
            </div>
            <div className="flex-item content-second">
              <div className="content">
                <h3>Company</h3>
                <div>
                  <a href="#about">About Us</a>
                </div>
                <div>
                  <a href="#services">Token Distribution</a>
                </div>
                <div>
                  <a href="#faq">FAQ</a>
                </div>
              </div>
              <div className="content">
                <h3>Support</h3>
                <div>
                  <a href="#Contact">Contact</a>
                </div>
                <div>
                  <a href="#home">Downloads & Resources</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p>© 2023 crowd trade capital. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
