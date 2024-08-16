import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useAccount, useDisconnect } from "wagmi";
import { Link } from "react-router-dom";
import { useWeb3Modal } from "@web3modal/react";
import Logo from "../../assets/logo/logo.png";
import { ReactComponent as Close } from "../../assets/icons/x.svg";
import Button from "../button";
import "./Login.scss";

const Login: React.FC = () => {
  const [activeContent, setActiveContent] = useState("login");
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();

  const handleSubmit = (values: { refferalCode: string }) => {
    console.log("Form values:", values);
  };
  return (
    <div className="login-wrapper">
      <div className="mx">
        <div className="login-container">
          <div className="close-icon">
            <Link to="/">
              <Close />
            </Link>
          </div>
          <div className="flex-item logo">
            <img src={Logo} alt="" />
          </div>
          <div className="flex-item tab-login">
            <div
              className={`nav-link ${
                "login" === activeContent ? "active" : ""
              }`}
              onClick={() => setActiveContent("login")}
            >
              <p>Login</p>
            </div>
            <div
              className={`nav-link ${
                "register" === activeContent ? "active" : ""
              }`}
              onClick={() => setActiveContent("register")}
            >
              <p>Register</p>
            </div>
          </div>
          {activeContent === "login" && (
            <div className="flex-item connect-wallet-btn">
              {!address ? (
                <Button varient="primary" onClick={open}>
                  CONNECT WALLET
                </Button>
              ) : (
                <Button varient="primary" onClick={disconnect}>
                  DISCONNECT
                </Button>
              )}
            </div>
          )}
          {activeContent === "register" && (
            <Formik
              initialValues={{ refferalCode: "" }}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form>
                  <div className="register-btns">
                    <p>Sponser ID</p>
                    <div className="flex-item refferal-input">
                      <Field
                        type="text"
                        name="refferalCode"
                        placeholder="Referral code"
                      />
                    </div>
                    <div className="flex-item register-btn">
                      <Link to="/dashboard" style={{ width: "100%" }}>
                        <Button varient="primary" type="submit">
                          REGISTER
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
