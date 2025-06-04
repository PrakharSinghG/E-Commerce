import React from 'react';
import './TeamMemberCard.css';

const TeamMemberCard = ({ image, name, role, socials }) => {
  return (
    <div className="teamCard">
      <img src={image} alt={name} className="teamCard-image" />
      <div className="teamCard-name">{name}</div>
      <div className="teamCard-role">{role}</div>
      <div className="teamCard-socials">
        {socials.includes('linkedin') && <i className="fab fa-linkedin"></i>}
        {socials.includes('medium') && <i className="fab fa-medium"></i>}
        {socials.includes('facebook') && <i className="fab fa-facebook"></i>}
        {socials.includes('dribbble') && <i className="fab fa-dribbble"></i>}
        {socials.includes('behance') && <i className="fab fa-behance"></i>}
      </div>
    </div>
  );
};

export default TeamMemberCard;
