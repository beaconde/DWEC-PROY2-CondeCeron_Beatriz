import React from 'react'
import { portfolio } from '../data/portfolio'
import Project from './Project'

const Portfolio = () => {

  return (
    <section className='main-content mt-10'>
      <div className='flex justify-center flex-wrap p-10'>
        {
          portfolio.map( project => (
            <Project key={project.title}
                     title={project.title}
                     description={project.description}
                     link={project.link}
                     image={project.image}
                     deployment={project.deployment}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio