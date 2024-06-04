import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/my_image.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Mayank Tripathi</h1>
      <h2 className="profile-text">The creator of this awesome pokedex Website</h2>
      {/* <h4 className="profile-text">
        This project is created by Mayank Tripathi
      </h4> */}
      <div className="profile-links">
        <a href="https://github.com/mayank2393">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mayank-tripathi-50b506254/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
