import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import "./TeamPage.css";

import zidane from "../../../assets/zidane.jpg";
import casillas from "../../../assets/ikercasillas.jpg";
import kroos from "../../../assets/tonikroos.jpg";
import james from "../../../assets/james.jpg";
import cristiano from "../../../assets/christiano.jpg";

const team = [
  {
    name: "Zidane",
    role: "Leadership & management",
    image: zidane,
    socials: ["linkedin", "medium", "facebook"],
  },
  {
    name: "Toni Kroos",
    role: "Product developer",
    image: kroos,
    socials: ["linkedin", "medium"],
  },
  {
    name: "Iker Casillas",
    role: "Marketing strategy",
    image: casillas,
    socials: ["medium"],
  },
  {
    name: "James",
    role: "Product designer",
    image: james,
    socials: ["medium", "dribbble", "behance"],
  },
  {
    name: "Cristiano",
    role: "Financial operations",
    image: cristiano,
    socials: ["linkedin", "facebook"],
  },
];

const TeamPage = () => {
  return (
    <div className="team-container">
      <h2 className="team-header">
        Without bonding and coordination, every project is a failure.
        <br />
        Look at who makes KICKSUP great. ;)
      </h2>
      <div className="team-grid">
        {team.map((member, idx) => (
          <TeamMemberCard key={idx} {...member} />
        ))}
      </div>
      <h3 className="team-footer">and You! ;)</h3>
    </div>
  );
};

export default TeamPage;
