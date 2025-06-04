import React from "react";
import "./contact.css"; // Assuming you have a CSS file for styling
import ContactCard from "./ContactCard"; // Importing the ContactCard component
import facebookIcon from "../../../assets/facebook.svg"; // Importing social media icons
import twitterIcon from "../../../assets/twitter.svg";
import instagramIcon from "../../../assets/insta.svg";

function Contact() {
  return (
    <div className="page">
      <ContactCard />
      <div className="social">
        <p>stay in touch</p>
        <div className="icons">
          <img src={facebookIcon} alt="" />
          <img src={twitterIcon} alt="" />
          <img src={instagramIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
