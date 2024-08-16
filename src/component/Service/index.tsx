import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ReasonOne from "../../assets/images/reason1.png";
import ReasonTwo from "../../assets/images/reason2.png";
import ReasonThree from "../../assets/images/reason3.png";
import Button from "../button";
import "./Service.scss";

const data = [
  {
    image: ReasonOne,
    title: "Trade Profit Share ",
  },
  {
    image: ReasonTwo,
    title: "Express Profit ",
  },
  {
    image: ReasonThree,
    title: "Referral Income",
  },
  {
    image: ReasonTwo,
    title: "Passive Income ",
  },
  {
    image: ReasonOne,
    title: "Graded Earnings ",
  },
];

const Service: React.FC = () => {
  return (
    <>
      <div className="service-wrapper" id="services">
        <div className="mx pad">
          <h2>
            Checkout Our <span>crowd trade capital</span> Collections
          </h2>
          <div className="service-container">
            {data.map((f, index) => {
              return (
                <div key={index} className="service-content">
                  <img src={f.image} alt="" />
                  <h4>{f.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="pad">
        <div className="plan-head">
          <div className="heading">
            <h2>Plan</h2>
          </div>
          <div className="plan-content">
            <div className="title">
              <div className="flex-item telegram-icon">
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
              <h2>Start crowd trade capital With</h2>
              <h4>
                <sup>$</sup>100
              </h4>
              <div className="flex-item btn">
                <Link to="login">
                  <Button varient="primary">JOIN NOW</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
