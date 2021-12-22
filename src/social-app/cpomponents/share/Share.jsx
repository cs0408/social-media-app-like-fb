import React from "react";
import "./share.css";
import { profile1 } from "../../assets";
import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";

const Share = () => {
  return (
    <div className="share">
      <div className="share__wrapper">
        <div className="share__wrapper__top">
          <img
            src={profile1}
            alt="Profile Image"
            className="share__wrapper__top__profileImage"
          />
          <input
            placeholder="What's in your mind ?"
            type="text"
            className="share__wrapper__top__input"
          />
        </div>
        <hr className="share__wrapper__hr" />
        <div className="share__wrapper__bottom">
          <div className="shar__wrapper__bottom__options">
            <div className="shar__wrapper__bottom__options__option">
              <PermMedia
                htmlColor="tomato"
                className="shar__wrapper__bottom__options__option__icon"
              />
              <span className="shar__wrapper__bottom__options__option__text">
                Photo or Video
              </span>
            </div>
            <div className="shar__wrapper__bottom__options__option">
              <Label
                htmlColor="#1877f2"
                className="shar__wrapper__bottom__options__option__icon"
              />
              <span className="shar__wrapper__bottom__options__option__text">
                Tag
              </span>
            </div>
            <div className="shar__wrapper__bottom__options__option">
              <Room
                htmlColor="green"
                className="shar__wrapper__bottom__options__option__icon"
              />
              <span className="shar__wrapper__bottom__options__option__text">
                Location
              </span>
            </div>
            <div className="shar__wrapper__bottom__options__option">
              <EmojiEmotions
                htmlColor="goldenrod"
                className="shar__wrapper__bottom__options__option__icon"
              />
              <span className="shar__wrapper__bottom__options__option__text">
                Feelings
              </span>
            </div>
          </div>
          <button className="share__wrapper__bottom__button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
