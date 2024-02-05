import React from "react";
import logo from "../Images/logo.png";
import "./NotesStyle.css";

const Header = () => {
  return (
    <>
      <div className='header'>
        <img src={logo} alt='logo' width='50' height='50' style={{marginRight:'10px'}}/>
        <h1> Google Keep </h1>
      </div>
    </>
  );
  
};

export default Header;