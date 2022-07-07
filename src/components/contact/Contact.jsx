import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'

const contact = () => {
  return (
    <section id='contact' >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>hattabiibtihel@gmail.com</h5>
            <a href="mailto:hattabiibtihel@gmail.com" target="_blank">Send A Message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messanger</h4>
            <h5>Ibtihel Ht</h5>
            <a href="https://m.me/ibtihel_ht" target="_blank">Send A Message</a>
          </article>

          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+213558774703</h5>
            <a href="https://api.whatsapp.com/send?phone=213558774703" target="_blank">Send A Message</a>
          </article>
        </div>
        {/* End of contact options  */}
        <form action=''>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required/>
           <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact