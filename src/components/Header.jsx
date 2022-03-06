import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {

    const [activePage, setActivePage] = useState('about');
    const activeStyle = 'text-white';

    return (
        <header className='bg-violet p-6'>
            <nav>
                <ul className='flex justify-center text-lightViolet text-lg'>
                    <li className='hover:scale-110 hover:text-white link-underline mx-6'>
                        <NavLink 
                            to="/"
                            className={activePage === 'about' && activeStyle}
                            onClick={() => setActivePage('about')}
                        >
                            Sobre mí
                        </NavLink>                        
                    </li>
                    <li className='mx-6 hover:scale-110 hover:text-white link-underline'>
                        <NavLink 
                            to="/academics"
                            className={activePage === 'academics' && activeStyle}
                            onClick={() => setActivePage('academics')}
                        >
                            Formación
                        </NavLink>
                    </li>
                    <li className='mx-6 hover:scale-110 hover:text-white link-underline'>
                        <NavLink 
                            to="/portfolio"
                            className={activePage === 'portfolio' && activeStyle}
                            onClick={() => setActivePage('portfolio')}
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li className='mx-6 hover:scale-110 hover:text-white link-underline'>
                        <NavLink 
                            to="/utility"
                            className={activePage === 'utility' && activeStyle}
                            onClick={() => setActivePage('utility')}
                        >
                            Utility
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header