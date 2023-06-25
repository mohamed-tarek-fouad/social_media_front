import React from "react";
import "./home.css";
import ProfileSide from "../../components/profileSide/profileSide";
import PostSide from "../../components/postSide/postSide";
import RightSide from "../../components/rightSide/rightSide";
const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
