import React from "react";
import "./OurTopPatner.scss";

const OurTopPatner: React.FC = () => {
  return (
    <div className="ourtop-patner-wrapper">
      <div className="mx pad">
        <h2>Our Top Partner</h2>
        <div className="ourtop-patner-container">
          <ul>
            <li>
              <p>Bitstamp</p>
            </li>
            <li>
              <p>Kraken</p>
            </li>
            <li>
              <p>Crypto.com</p>
            </li>
            <li>
              <p>coinbase</p>
            </li>
            <li>
              <p>eToro</p>
            </li>
            <li>
              <p>Bitfinex</p>
            </li>
            <li>
              <p>Luno</p>
            </li>
            <li>
              <p>Binance Europe</p>
            </li>
            <li>
              <p>Saxo Bank</p>
            </li>
            <li>
              <p>XTB</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurTopPatner;
