import React from "react";
import AboutUsImg from "../../assets/images/about_us.png";
import "./About.scss";

const About: React.FC = () => {
  return (
    <div className="about-wrapper" id="about">
      <div className="mx pad">
        <div className="about-container">
          <div className="about-img">
            <img src={AboutUsImg} alt="" />
          </div>
          <div className="about-content">
            <h2>
              The Frontier Of <span>crowd trade capital</span>
            </h2>
            <p>
              Our mission is to leverage the power of the crowd trade capital Coin through a
              protocol trusted with billions for its performance and reliability. We believe in
              empowering you to take full control of your portfolio.
            </p>
            <p>
              At N1, we are passionate about fostering the growth of the crypto community and the
              adoption of crowd trade capital coin. As the world witnesses a surge in crypto
              adoption, we believe in the importance of increasing liquidity to match. We are not a
              financial service provider, nor do we sell financial products or make lucrative
              offers. Instead, we are a dedicated platform where users can participate, engage, and
              earn rewards in the form of crowd trade capital coins. Our mission is to build a
              thriving community that supports the crowd trade capital coin ecosystem, empowering
              users to take control of their digital assets and be a part of the future of finance.
              Join us on this exciting journey!
            </p>
            <p>Join us at N1 and take full advantage of what Nordek has to offer!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
