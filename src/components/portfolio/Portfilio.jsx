import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/1.png'
import IMG2 from '../../assets/2.png'
import IMG3 from '../../assets/3.png'
import IMG4 from '../../assets/4.jpg'
import IMG5 from '../../assets/5.png'
import IMG6 from '../../assets/6.jpg'

const portfilio = () => {
  return (
    <section id='portfolio'>
      <h5>My recet Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/1b71h3l" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/alien_pixels"className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/1b71h3l" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/alien_pixels"className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/1b71h3l" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/alien_pixels"className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/1b71h3l" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/alien_pixels"className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/1b71h3l" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/alien_pixels"className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/1b71h3l" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/alien_pixels"className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default portfilio