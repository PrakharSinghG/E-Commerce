import React from "react";
import { NavLink } from "react-router";
import "./header.css";
import logo from "../../assets/websitelogo.png";

function Header() {
  return (
    <nav>
      <img src={logo} />
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "nav-link" : "nav-link-inactive"}`
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/theJourney"
          className={({ isActive }) =>
            `${isActive ? "nav-link" : "nav-link-inactive"}`
          }
        >
          THE JOURNEY
        </NavLink>
        <NavLink
          to="/team"
          className={({ isActive }) =>
            `${isActive ? "nav-link" : "nav-link-inactive"}`
          }
        >
          TEAM
        </NavLink>
        <NavLink
          to="/store"
          className={({ isActive }) =>
            `${isActive ? "nav-link" : "nav-link-inactive"}`
          }
        >
          STORE
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "nav-link" : "nav-link-inactive"}`
          }
        >
          CONTACT
        </NavLink>
      </div>
      <div className="user">
        <img src="https://cdn.creazilla.com/icons/3251108/person-icon-md.png" />
        GAGAN
      </div>
    </nav>
  );
}

export default Header;
