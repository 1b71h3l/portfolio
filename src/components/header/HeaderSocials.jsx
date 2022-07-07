import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {MdMail} from 'react-icons/md'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ibtihel-hattabi" target="_blank"> <BsLinkedin/></a>
        <a href="https://github.com/1b71h3l" target="_blank"><BsGithub/></a>
        <a href="mailto:hattabiibtihel@gmail.com" target="_blank"><MdMail/></a>
        <a href="https://www.instagram.com/ibti__hel/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials