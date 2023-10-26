import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <>
     <div className=' bg-white p-4 h-[10vh]'>
        <div className='flex justify-between'>
        <div className='px-4 py-2 text-orange-500 font-bold text-lg '>
            LOGO
        </div>
        <div>
            <ul className='flex gap-6 cursor-pointer px-4 py-2'>
                <li>
                    <NavLink to='/'
                    className={({isActive}) => `${isActive ? "text-orange-700" : "text-gray-700"}`}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink to='/passwordgenerator'
                    className={({isActive}) => `${isActive ? "text-orange-700" : "text-gray-700"}`}
                    >Password Generator</NavLink>
                </li> 
                <li>
                    <NavLink to='/bgChanger'
                    className={({isActive}) => `${isActive ? "text-orange-700" : "text-gray-700"}`}
                    >BG-Changer</NavLink>
                </li>
            </ul>
        </div>
        <div className='gap-6'>
            <button className='mr-4'>Log in</button>
            <button 
            className='bg-orange-500 rounded-xl px-2 py-2'
            >Get started </button>
        </div>
        </div>
     </div>
    </>
  )
}
export default Header