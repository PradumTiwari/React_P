// Footer component for footer section
import React from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const {user}=useContext(UserContext);
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a href="#" target="_blank">
        {user.name}  --{user.email}
      </a>
      <br />
      <i className="fa-solid fa-copyright"></i>2023
      <strong>
        Food<span>Fire</span>
      </strong>
    </div>
  );
};

export default Footer;
