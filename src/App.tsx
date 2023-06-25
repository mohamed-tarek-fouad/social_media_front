import React from "react";
import "./App.css";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Auth from "./pages/auth/auth";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      {/* <Home/> */}
      <Profile />
      {/* <Auth /> */}
    </div>
  );
}

export default App;
