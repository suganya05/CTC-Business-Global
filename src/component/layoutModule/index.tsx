import React from "react";
import "./layoutModule.scss";

interface ILayoutModule {
  children: React.ReactNode;
  className?: string;
  handleToggle: () => void;
}
const LayoutModule: React.FC<ILayoutModule> = ({
  children,
  handleToggle,
  className,
}) => {
  return (
    <div className="mx">
      <div className="product-detail">
        <div className="modal-overlay " onClick={handleToggle} />
        <div className={`product-detail-wrap ${className}`}>
          <div className="layout-module-children">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutModule;
