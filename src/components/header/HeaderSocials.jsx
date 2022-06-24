import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {MdMail} from 'react-icons/md'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ibtihel-hattabi" target="_blank"> <BsLinkedin/></a>
        <a href="https://github.com/HATTABI-Ibtihel" target="_blank"><BsGithub/></a>
        <a href="hattabiibtihel@gmail.com" target="_blank"><MdMail/></a>
        <a href="https://instagram.com" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials