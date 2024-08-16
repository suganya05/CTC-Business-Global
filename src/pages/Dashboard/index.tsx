import React from "react";
import Layout from "../../component/Layout";
import Logo from "../../assets/logo/logo.png";
import Button from "../../component/button";
import "./Dashboard.scss";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-wrapper">
      <Layout>
        <div className="dashboard-container">
          <div className="row">
            <div className="user-id-box box-color box-width">
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
              <div className="content">
                <h3>User ID 1</h3>
                <h4>Sponsor Address</h4>
                <h4>0xd45..........28FC6</h4>
              </div>
            </div>
            <div className="personal-link box-color box-width">
              <div>
                <p>Personal link</p>
                <h5>https://www.ctc.i..........28FC6</h5>
              </div>
              <div className="copy-btn">
                <Button varient="primary">COPY</Button>
              </div>
            </div>
            <div className="direct box-color box-width">
              <div>
                <p>Direct</p>
                <h4>3</h4>
              </div>
              <div>
                <p>Coworker</p>
                <h4>82</h4>
              </div>
            </div>
            <div className="total-box box-color">
              <p>Total Earning</p>
              <h4>0.0000 $</h4>
            </div>
            <div className="total-box box-color">
              <p>Total Graded Earning</p>
              <h4>0.0000 $</h4>
            </div>
            <div className="direct box-color box-width">
              <div>
                <p>Trade Profit Share</p>
                <h4>3</h4>
              </div>
              <div>
                <p>Express Profit</p>
                <h4>82</h4>
              </div>
            </div>
            <div className="total-box box-color">
              <p>Referral Income</p>
              <h4>0.0000 $</h4>
            </div>
            <div className="total-box box-color">
              <p>Passive Income</p>
              <h4>0.0000 $</h4>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
