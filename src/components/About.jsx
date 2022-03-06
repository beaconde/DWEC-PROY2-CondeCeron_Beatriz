import React from 'react'
import Typical from 'react-typical'
import { technologies } from '../data/technologies'

const About = () => {
  return (
    <section className='main-content flex flex-col justify-around'>
      <div className='self-start pl-48 flex flex-col items-start about-left'>
        <h1 className='text-5xl'>Beatriz Conde Cerón</h1>
        <p className='mt-4 text-2xl'>Desarrolladora Web</p>
      </div>
      <div className='self-end px-48 text-4xl text-right about-bottom flex justify-between'>
        <div className='flex about-left'>
          {
            technologies.map(technology => (
              <img src={technology.src} alt={technology.name} className="tecnologia"/>
            ))
          }
        </div>
        <Typical 
          loop = {Infinity}
          steps = {[
            "Front-End", 1000,
            "Back-End", 1000,
            "UX/UI", 1000
          ]}
          className="about-right"
        />
      </div>
    </section>
  )
}

export default About