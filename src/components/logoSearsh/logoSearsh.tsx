import React from "react";
import Logo from "../../img/logo.png";
import "./logoSearsh.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="" />
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <SearchOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
