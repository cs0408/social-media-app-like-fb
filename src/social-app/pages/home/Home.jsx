import React from "react";
import "./home.css";
// components
import Navbar from "../../cpomponents/navbar/Navbar";
import Leftbar from "../../cpomponents/leftBar/Leftbar";
import Feed from "../../cpomponents/feed/Feed";
import Rightbar from "../../cpomponents/rightBar/Rightbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
