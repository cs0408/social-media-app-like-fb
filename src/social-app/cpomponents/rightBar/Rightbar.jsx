import React from "react";
import "./rightbar.css";
import { CardGiftcardRounded } from "@material-ui/icons";
import add from "../../assets/add.jfif";
import { profile1 } from "../../assets";
import { OnlineFriends } from "../../dummy_data";

const Rightbar = () => {
  return (
    <div className="rightBar">
      <div className="rightBar__wrapper">
        <div className="rightBar__wrapper__birthdayContainer">
          <CardGiftcardRounded
            htmlColor="green"
            className="rightBar__wrapper__birthdayContainer__birthdayImage"
          />
          <span className="rightBar__wrapper__birthdayContainer__birthdayText">
            <b>Chandan Sahu</b> and <b>4 others</b> birthday
          </span>
        </div>
        <img src={add} alt="Add" className="rightBar__wrapper__add" />
        <h4 className="rightBar__wrapper__onlineFirends">Online Friends</h4>
        <ul className="rightBar__wrapper__onlineFirendsList">
          {OnlineFriends.map((item) => {
            return (
              <li
                key={item.id}
                className="rightBar__wrapper__onlineFirendContainer"
              >
                <div className="rightBar__wrapper__onlineFirendContainer__imageContainer">
                  <img
                    src={item.img}
                    alt="Profile Image"
                    className="rightBar__wrapper__onlineFirendContainer__imageContainer__profileImage"
                  />
                  <span className="rightBar__wrapper__onlineFirendContainer__imageContainer__onlineBadge"></span>
                </div>
                <span className="rightBar__wrapper__onlineFirendContainer__userName">
                  {item.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
