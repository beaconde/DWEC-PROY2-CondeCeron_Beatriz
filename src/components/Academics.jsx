import React from 'react'
import { academics } from '../data/academics'
import Course from './Course'

const Academics = () => {
  return (
    <section className='pl-6 flex flex-row justify-center main-content mt-5 items-center'>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 w-2/4 h-full ">                  
        {
          academics.map( course => (
            <Course key={course.name}
                    name={course.name}
                    date={course.date}
                    place={course.place}
                    link={course.link}
            />
          ))
        }
      </ol>
    </section>
  )
}

export default Academics