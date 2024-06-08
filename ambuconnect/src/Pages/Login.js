import React, { useEffect, useState } from "react";
import { account } from "../appwrite/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Pulse from "../Assets/pulse_logo.png";
import BannerBackground from "../Assets/home-banner-background.png";
import "./login.css";
import { GrMail } from "react-icons/gr";

import { FaLock } from "react-icons/fa";

import BannerImage from "../Assets/home-banner-image.png";

const Login = () => {


 
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  async function loginfun() {
    try {
      await account.createEmailSession(userData.email, userData.password);
      navigate("/account");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  const signup = () => {
    navigate("/signup");
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div data-aos="fade-right" data-aos-duration="700" id="login-main">
          <div id="login-form">
            <h2 id="login-h2">AMBULANCE LOGIN</h2>
            <img className="pulse-logo" src={Pulse} alt="" />
            <div className="input-box">
              <GrMail className="icon" />
              <input
                type="email"
                id="login-input"
                placeholder="EMAIL"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </div>
            <div className="input-box">
              <FaLock className="icon" />
              <input
                type="text"
                id="password-input"
                placeholder="PASSWORD"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </div>
            <div className="remember-forgot">
              <label>
                <input className="large-checkbox" type="checkbox" />
                &nbsp;&nbsp;&nbsp;REMEMBER ME
              </label>
            </div>
            <button className="login" onClick={loginfun} id="login-btn">
              LOGIN
            </button>

            <button className="signup-btn" onClick={signup} id="login-btn">
              <span className="signup-span">CREATE AN ACCOUNT ?</span> SIGN UP
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
