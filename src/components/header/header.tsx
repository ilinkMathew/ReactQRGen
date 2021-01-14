import React from "react";

import logo from '../../logo.svg';
function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
         <img style={{width:"50px"}} src={logo} alt="logo"/>   
          QR GENERATOR</span>
      </div>
    </nav>
  );
}

export default Header;