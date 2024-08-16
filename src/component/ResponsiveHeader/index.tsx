import React from "react";
import "./ResponsiveHeader.scss";

interface IResponsiveHeader {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

const ResponsiveHeader: React.FC<IResponsiveHeader> = ({ setOpen, open }) => {
  return (
    <div
      className={
        open ? "responsive-header-link active" : "responsive-header-link"
      }
    >
      <div className="nav-link">
        <div onClick={() => setOpen(false)} className="link">
          <a href="#home">Home</a>
        </div>
        <div onClick={() => setOpen(false)} className="link">
          <a href="#about">About</a>
        </div>
        <div onClick={() => setOpen(false)} className="link">
          <a href="#services">Services</a>
        </div>
        <div onClick={() => setOpen(false)} className="link">
          <a href="#faq">FAQ</a>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveHeader;
