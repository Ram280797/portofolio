import React from 'react';
import {Link} from "react-scroll";
import "./header.css"; 
import Home from '../home/Home';
import Topcontainer from '../Topcontainer/Topcontainer';
function Header() {
  return (
    <div className='Header'>
        <div className='Header__left'>
            <h1>
               <span> R</span>am<span>kumar</span>
                </h1>
        </div>
<div className='Header__right'>
{/* <Link to='Home' smooth={true} offset={-100} duration={500}>
<h4> Home</h4>
</Link> */}
<Link to='Home' smooth={true}  offset={-100} duration={500}>
<h4> About Me</h4>
</Link>
<Link to='skills' smooth={true} offset={-50} duration={500}>
<h4>skills</h4>
</Link>
<Link to='projects' smooth={true} offset={-100} duration={500}>
<h4>Projects</h4>
</Link>
<Link to='contact' smooth={true} duration={500}>
<h4> Contact</h4>
</Link>
</div>
    </div>
  )
}

export default Header