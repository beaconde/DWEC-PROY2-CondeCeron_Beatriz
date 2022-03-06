import React from 'react'

const Course = (props) => {
  return (
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-clate rounded-full -left-1.5 border border-black dark:border-slate dark:bg-slate"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {props.date}
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-black">
            {props.name}
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {props.place}
        </p>
        {
            props.link !== '' && (
                <a href={props.link} 
                   target="blank"
                   className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-button rounded-lg border hover:bg-violet hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-white transition">
                    Saber más 
                    <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            )
        }
    </li>
  )
}

export default Course