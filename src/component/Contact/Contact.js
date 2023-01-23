import React from 'react'
import { Element } from 'react-scroll'
import "./Contact.css"

function Contact() {
  return (
  <Element className="contact" id="contact">

    <h1>Contact</h1>
    <div className='contact__container'>
        <p>
           <b> Email : </b><span>ramk072897@gmail.com</span>
        </p>
        <p>
           <b> Github :</b><span>Ram280797</span>
        </p>
        <p>
           <b> Phone: </b><span>+91 8056587373</span>
        </p>
        <div className='contact_icons'></div>
        <a href='google.com'>
        <i className='fab fa-google'></i>


        </a>
    </div>


  </Element>
  )
}

export default Contact