import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-lightViolet flex justify-between px-20 py-6 h-20'>
      <ul className='self-center opacity-75'>
        <li className='my-1'>
          beatrizcondeceron@gmail.com
        </li>
      </ul>
      <ul className='self-center flex'>
        <li className='transition-opacity duration-300 ease-in-out opacity-70 hover:opacity-100 mx-1 text-xl'>
          <a href="https://www.linkedin.com/in/beatriz-conde-cer%C3%B3n-a631aa231/" target="blank">
            <FaLinkedin/>
          </a>
        </li>
        <li className='transition-opacity duration-300 ease-in-out opacity-70 hover:opacity-100 mx-1 text-xl'>
          <a href="https://github.com/beaconde" target="blank">
            <FaGithub/>  
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer