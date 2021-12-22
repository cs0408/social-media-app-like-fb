import React, { useState } from "react";
import "./post.css";
import { Favorite, MoreVert, ThumbUpAlt } from "@material-ui/icons";

const Post = (props) => {
  const {
    profileImage,
    profileUserName,
    postDate,
    postText,
    postImage,
    postLiked,
    postComments,
  } = props;

  const [liked, setLiked] = useState(postLiked);
  const [isLiked, setIsLiked] = useState(false);

  const callLiked = () => {
    setLiked(isLiked ? liked - 1 : liked + 1);
    setIsLiked(!isLiked);
  };

  // main return function
  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__wrapper__top">
          <div className="post__wrapper__top__left">
            <img
              src={profileImage}
              alt="Profile Image"
              className="post__wrapper__top__left__profileImage"
            />
            <span className="post__wrapper__top__left__userName">
              {profileUserName}
            </span>
            <span className="post__wrapper__top__left__postDate">
              {postDate} ago
            </span>
          </div>
          <div className="post__wrapper__top__right">
            <MoreVert />
          </div>
        </div>
        <div className="post__wrapper__center">
          <span className="post__wrapper__center__postText">{postText}</span>
          <img
            src={postImage}
            alt="Post Image"
            className="post__wrapper__center__postImage"
          />
        </div>
        <div className="post__wrapper__bottom">
          <div className="post__wrapper__bottom__left">
            <div
              className="post__wrapper__bottom__left__iconContainer1"
              onClick={() => callLiked("like")}
            >
              <ThumbUpAlt
                htmlColor="white"
                className="post__wrapper__bottom__left__iconContainer1__icon"
              />
            </div>
            <div
              className="post__wrapper__bottom__left__iconContainer2"
              onClick={() => callLiked("love")}
            >
              <Favorite
                htmlColor="white"
                className="post__wrapper__bottom__left__iconContainer2__icon"
              />
            </div>
            <span className="post__wrapper__bottom__left__postLikeCounterText">
              {liked > 999 ? "999+" : liked} people liked it
            </span>
          </div>
          <div className="post__wrapper__bottom__right">
            <span className="post__wrapper__bottom__right__commentText">
              {postComments > 99 ? "99+" : postComments} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
