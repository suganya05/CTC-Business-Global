import { EthereumClient } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { BrowserRouter } from "react-router-dom";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { WagmiConfig } from "wagmi";
import { chains, config, walletConnectProjectId } from "./wagmi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App";
import "./index.scss";

const ethereumClient = new EthereumClient(config, chains);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <WagmiConfig config={config}>
        <App />
        <Web3Modal projectId={walletConnectProjectId} ethereumClient={ethereumClient} />
      </WagmiConfig>
    </BrowserRouter>
  </React.StrictMode>
);
