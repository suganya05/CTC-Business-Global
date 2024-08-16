import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import "./Layout.scss";
import DashboardHeader from "../DashboardHeader";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <div className="header">
        <DashboardHeader />
      </div>
      <div className="layoutWrapper">
        <Sidebar />
        <div className="layout-children">{children}</div>
      </div>
    </>
  );
};

export default Layout;
