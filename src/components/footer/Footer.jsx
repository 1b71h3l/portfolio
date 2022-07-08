import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import { BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'

const footer = () => {
  return (
    <footer>
    <a href='#' className='footer__logo' >IBTIHEL </a>
    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#porfolio'>Porfolio</a></li>
      <li><a href='#testimonials'>Testimonials</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href='http://facebook.com'><FiFacebook/></a>
      <a href='http://instagram.com'><BsInstagram/></a>
      <a href='http://twitter.com'><FiTwitter/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Ibtihel All rights reserved</small>
    </div>
    </footer>
  )
}

export default footer