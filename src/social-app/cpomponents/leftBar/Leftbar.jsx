import React from "react";
import "./leftbar.css";
import { leftBarExplore, leftBarFriends } from "../../dummy_data";

const Leftbar = () => {
  return (
    <div className="leftBar">
      <div className="leftBar__wrapper">
        <ul className="leftBar__wrapper__list">
          {leftBarExplore.map((item) => {
            return (
              <li className="leftBar__wrapper__list__item" key={item.id}>
                {item.icon}
                <span className="leftBar__wrapper__list__item__text">
                  {item.text}
                </span>
              </li>
            );
          })}
        </ul>
        <button className="leftBar__wrapper__button">Show More</button>
        <hr className="leftBar__wrapper__hr" />
        <ul className="leftBar__wrapper__friendList">
          {leftBarFriends.map((item) => {
            return (
              <li className="leftBar__wrapper__friendList_firend" key={item.id}>
                <img
                  src={item.img}
                  alt="Firend Profile Image"
                  className="leftBar__wrapper__friendList__friendImage"
                />
                <span className="leftBar__wrapper__friendList__firendName">
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

export default Leftbar;
