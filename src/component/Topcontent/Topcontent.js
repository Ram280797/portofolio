import React from "react";
import { Link ,Element} from "react-scroll";
import skilling from "../../Photo/ram.png"
import "./Topcontent.css";

function Topcontent() {
  return (
    <div className="topcontent">
       <img src={skilling} className="image"/>
      <div className="topcontent__container">
        <h1>Mr.S.Ramkumar</h1>
        <p>A professional Web Developer & UI and UX Designer</p>
        <a href="www.google.com">
          <button className="topcontent__downloadButton">Download Cv</button>
        </a>
        <Link to="project" smooth={true} duration={500}>
          <button className="topcontent__workButton">My work</button>
        </Link>
      </div>
    </div>
  );
}

export default Topcontent;
