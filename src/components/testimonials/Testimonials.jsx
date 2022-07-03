import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Accueil Kids Videoty.jpg'
import AVTR2 from '../../assets/Accueil Kids Videoty.jpg'
import AVTR3 from '../../assets/Aesthetic Ghibli Scene.jpg'
import AVTR4 from '../../assets/Aesthetic Ghibli Scene.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" modules={[ Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}>
       
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="AVATAR one" />
          </div>
          <h5 className='client__name'>Lorem ipsum</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam hic necessitatibus porro inventore, molestias eius reprehenderit aliquid vel commodi nulla? Quasi numquam veritatis quo nulla vitae voluptatibus labore esse!
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR2} alt="AVATAR one" />
          </div>
          <h5 className='client__name'>Lorem ipsum</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam hic necessitatibus porro inventore, molestias eius reprehenderit aliquid vel commodi nulla? Quasi numquam veritatis quo nulla vitae voluptatibus labore esse!
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR3} alt="AVATAR one" />
          </div>
          <h5 className='client__name'>Lorem ipsum</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam hic necessitatibus porro inventore, molestias eius reprehenderit aliquid vel commodi nulla? Quasi numquam veritatis quo nulla vitae voluptatibus labore esse!
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR4} alt="AVATAR one" />
          </div>
          <h5 className='client__name'>Lorem ipsum</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam hic necessitatibus porro inventore, molestias eius reprehenderit aliquid vel commodi nulla? Quasi numquam veritatis quo nulla vitae voluptatibus labore esse!
          </small>
        </SwiperSlide>

      </Swiper>
    </section >
  )
}

export default testimonials