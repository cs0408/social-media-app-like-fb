import React from "react";
import { Posts } from "../../dummy_data";
import Post from "../post/Post";
import Share from "../share/Share";
// css
import "./feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__wrapper">
        <Share />
        {Posts.map((item) => {
          return (
            <Post
              key={item.id}
              profileImage={item.profileImage}
              profileUserName={item.profileUserName}
              postDate={item.postDate}
              postText={item.postText}
              postImage={item.postImage}
              postLiked={item.postLiked}
              postComments={item.postComments}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
