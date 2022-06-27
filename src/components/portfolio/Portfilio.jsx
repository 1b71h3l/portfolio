import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/'

const portfilio = () => {
  return (
    <section id='portfolio'>
      <h5>My recet Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/1b71h3l" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/alien_pixels"className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfilio