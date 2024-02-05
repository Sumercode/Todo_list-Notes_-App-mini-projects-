import React from "react";
import "./NotesStyle.css";

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <h3 style={{textAlign:"center" }}>copyright © {year}</h3>
      </footer>
    </>
  );
  
};

export default Footer;