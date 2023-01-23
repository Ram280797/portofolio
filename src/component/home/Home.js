import React from 'react'
import {Link, Element } from 'react-scroll';
import Topcontainer from '../Topcontainer/Topcontainer';
import Topcontent from '../Topcontent/Topcontent';
import "../Topcontainer/Topcontainer.css";

function Home() {
  return (
<Element className='home' id="Home">
<div className='home-container'>
<Topcontainer/>
</div>

</Element>

  )
}

export default Home