import React from "react";
import FollowersCard from "../followersCard/followersCard";
import InfoCard from "../infoCard/infoCard";
import LogoSearch from "../logoSearsh/logoSearsh";
const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
