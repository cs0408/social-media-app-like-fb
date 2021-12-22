import React from "react";
import "./navbar.css";
// material icons
import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import { profile1 } from "../../assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <span className="navbarLeft__logo">Social Media</span>
      </div>
      <div className="navbarCenter">
        <div className="navbarCenter__searchDiv">
          <input
            placeholder="Search posts etc."
            className="navbarCenter__searchDiv__input"
          />
          <Search className="navbarCenter__searchDiv__icon" />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarRight__links">
          <span className="navbarRight__links__link">Home</span>
          <span className="navbarRight__links__link">Timeline</span>
        </div>
        <div className="navbarRight__icons">
          <div className="navbarRight__icons__iconDiv">
            <Person />
            <span className="navbarRight__icons__iconDiv__badge">3</span>
          </div>
          <div className="navbarRight__icons__iconDiv">
            <Chat />
            <span className="navbarRight__icons__iconDiv__badge">3</span>
          </div>
          <div className="navbarRight__icons__iconDiv">
            <Notifications />
            <span className="navbarRight__icons__iconDiv__badge">3</span>
          </div>
        </div>
        <img
          src={profile1}
          alt="Profile Picture"
          className="navbarRight__profileImage"
        />
      </div>
    </div>
  );
};

export default Navbar;
