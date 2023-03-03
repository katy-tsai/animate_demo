import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-container">
        <div className="main">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
