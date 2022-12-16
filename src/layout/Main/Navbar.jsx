import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';

const Navbar = () => {
    return (
        <div className='mt-2'>
            <div className='flex items-center justify-between py-2'>
                <Link
                    className='text-4xl font-bold drop-shadow-lg'
                    to="/"
                ><span className='text-primary'>Ask</span>World
                </Link>

                <div className='bg-white flex items-center h-11 w-1/2 rounded-full px-3 py-2 shadow-md'>
                    <input className='h-8 w-full text-lg border-0 focus:ring-0 outline-none' type="text" name='search' placeholder='Search . . .' />
                    <button className='bg-primary p-2 rounded-full shadow-md'>
                        <BiSearchAlt color='white' size='18px' />
                    </button>
                </div>
            </div>
            <nav className='border-y border-cyan-400 border-opacity-50 py-3 mt-3'>
                <ul className='flex items-center justify-center gap-4 text-lg drop-shadow-lg'>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-primary' : undefined
                        } to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-primary' : undefined
                        } to='/reading-history'>Reading-History</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-primary' : undefined
                        } to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-primary' : undefined
                        } to='/contact'>Contact</NavLink>
                    </li>
                    <li className='text-text-color font-bold'>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-primary' : undefined
                        } to='/dashboard'>Dashboard</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;