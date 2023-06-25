import React from "react";
import PostSide from "../../components/postSide/postSide";
import ProfileCard from "../../components/profileCard/profileCard";
import ProfileLeft from "../../components/profileLeft/profileLeft";
import RightSide from "../../components/rightSide/rightSide";
import "./profile.css";
const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />

      <div className="Profile-center">
        <ProfileCard />
        <PostSide />
      </div>

      <RightSide />
    </div>
  );
};

export default Profile;
