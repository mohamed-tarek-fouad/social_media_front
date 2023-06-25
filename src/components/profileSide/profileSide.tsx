import React from "react";
import "./profileSide.css";
import LogoSearsh from "../logoSearsh/logoSearsh";
import ProfileCard from "../profileCard/profileCard";
import FollowersCard from "../followersCard/followersCard";
const ProfileSide = () => {
  return (
    <div className="profileSide">
      <LogoSearsh />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
