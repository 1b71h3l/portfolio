import React from 'react'
import './nav.css'
import {AiFillHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {GiNotebook} from "react-icons/gi"
import {FaHandsHelping} from "react-icons/fa"
import {BsFillChatDotsFill} from "react-icons/bs"

const nav = () => {
  return (
    <nav>
    <a href="#" ><AiFillHome/></a>
    <a href="#about" ><AiOutlineUser/></a>
    <a href="#experience" ><GiNotebook/></a>
    <a href="#services" ><FaHandsHelping/></a>
    <a href="#contact" ><BsFillChatDotsFill/></a>

    </nav>
  )
}

export default nav