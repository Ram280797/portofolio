import React from 'react'
import { Element } from 'react-scroll'
import skilling from "../../Photo/oie_jpg.png"
import "./Skillcontainer.css"

function skillcontainer() {
  return (
  <Element className="skillContainer" id="skills">
   
       <div className='skillContainer_text'>
      
      <img src={skilling} alt="skilling"/>
      <div className='box'>
        <h2>Skills</h2>
        <ul>
          <li><span>1</span>HTML</li>
          <li><span>2</span>CSS</li>
          <li><span>3</span>JAVASCRIPT</li>
          <li><span>4</span>REACT JS</li>
          <li><span>5</span>NODE JS</li>
          <li><span>6</span>MONGO DB</li>
          <li><span>7</span>AWS</li>
         
        </ul>
      </div>
    </div>
      </Element>
  ) 
}

export default skillcontainer