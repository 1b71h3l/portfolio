import React from 'react'
import './experience.css'
import { MdLibraryAddCheck } from 'react-icons/md';

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <MdLibraryAddCheck className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='texte-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdLibraryAddCheck className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='texte-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdLibraryAddCheck className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='texte-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdLibraryAddCheck className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='texte-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdLibraryAddCheck className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='texte-light'>Experienced</small>
              </div>
            </article>

            {/* <article className='experience__details'>
              <MdLibraryAddCheck className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='texte-light'>Experienced</small>
              </div>
            </article> */}
          </div>
        </div>
        {/* End of frontend section  */}

        <div className="experience__backend">
          <h3>Backend Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <MdLibraryAddCheck className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='texte-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdLibraryAddCheck className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='texte-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdLibraryAddCheck className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='texte-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdLibraryAddCheck className='experience__details-icon' />
              <div>
                <h4>C</h4>
                <small className='texte-light'>Experienced</small>
              </div>
            </article>

             {/* <article className='experience__details'>
              <MdLibraryAddCheck className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='texte-light'>Experienced</small>
              </div>
            </article> */}
          </div>
        </div>
      </div>
    </section >
  )
}

export default experience