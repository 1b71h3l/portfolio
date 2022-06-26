import React from 'react'
import './experience.css'
import {MdLibraryAddCheck} from 'react-icons/md';

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
         <h3>Frontend Developement</h3>
          <div className="experience__container">
            <article className='experience__details'>
              <MdLibraryAddCheck/>
              <h4>HTML</h4>
              <small className='texte-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <MdLibraryAddCheck/>
              <h4>CSS</h4>
              <small className='texte-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <MdLibraryAddCheck/>
              <h4>JavaScript</h4>
              <small className='texte-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <MdLibraryAddCheck/>
              <h4>Bootstrap</h4>
              <small className='texte-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <MdLibraryAddCheck/>
              <h4>React</h4>
              <small className='texte-light'>Experienced</small>
            </article>

            {/* <article className='experience__details'>
              <MdLibraryAddCheck/>
              <h4>HTML</h4>
              <small className='texte-light'>Experienced</small>
            </article> */}
          </div>
        </div>
       {/* End of frontend section  */}

        <div className="experience__backend">
        <h3>Backend Developement</h3>
          <div className="experience__container">
            <article className='experience__details'>
              <MdLibraryAddCheck/>
              <h4>Node JS</h4>
              <small className='texte-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <MdLibraryAddCheck/>
              <h4>MySQL</h4>
              <small className='texte-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <MdLibraryAddCheck/>
              <h4>Java</h4>
              <small className='texte-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <MdLibraryAddCheck/>
              <h4>C</h4>
              <small className='texte-light'>Experienced</small>
            </article>

            {/* <article className='experience__details'>
              <MdLibraryAddCheck/>
              <h4>HTML</h4>
              <small className='texte-light'>Experienced</small>
            </article> */}
         </div>
        </div>
      </div>
    </section >
  )
}

export default experience