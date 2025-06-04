import React from "react";
import "./contact.css"; // Assuming you have a CSS file for styling

const ContactCard = () => {
  const contacts = [
    { email: "support@kicksup.com", desc: "for any technical support" },
    { email: "info@kicksup.com", desc: "for more information" },
    { email: "feedback@kicksup.com", desc: "to send your feedback" },
    { email: "jobs@kicksup.com", desc: "to work with us" },
  ];

  return (
    <div className="card">
      <h2>REACH US AT</h2>
      <div className="contact-list">
        {contacts.map((item, i) => (
          <p key={i}>
            <strong>{item.email}</strong>
            <br />
            <span>{item.desc}</span>
          </p>
          
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
