import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./postShare.css";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CloseIcon from "@mui/icons-material/Close";

const PostShare = () => {
  const [image, setImage]: any = useState(null);
  const imageRef: any = useRef();

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's happening" />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <InsertPhotoOutlinedIcon />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <VideoLibraryOutlinedIcon />
            Video
          </div>{" "}
          <div className="option" style={{ color: "var(--location)" }}>
            <LocationOnOutlinedIcon />
            Location
          </div>{" "}
          <div className="option" style={{ color: "var(--shedule)" }}>
            <CalendarMonthOutlinedIcon />
            Shedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <CloseIcon onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
