import React from 'react'
import logo from '../../assets/imgs/png-church-logo.jpg';
import small from "../../assets/imgs/church-logo.jpg"
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import { useState } from 'react'

const Navbar = () => {

const [open, setOpen] = useState(false)

  return (
    <>
    
    <div>
        <nav className='bg-blue-200 sticky static'>
            <div className='flex items-center font-medium justify-around'>
            <div className='z-50 p-2 md:w-auto w-full flex justify-between'>
                <img src={small} alt='small-logo' className=' w-20 h-12 md:cursor-pointer lg:cursor-pointer sm:cursor-pointer' />
                <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
                    <ion-icon name={`${ open ? "close" : "menu"}`}></ion-icon>
                </div>
            <ul className='md:flex hidden font-medium items-center gap-10'>
            <li>
                <Link to="/" className='py-2 px-10 inline-block uppercase'>
                    Home
                </Link>
            </li>
            <NavLinks />
        </ul>


        {/* <div> */}
            {/* Mobile view */}
        <ul className={`
        md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${ open ? "left-0" : "left-[-100%]"}
        `}>
            <li>
                <Link to="/" className='py-7 px-3 inline-block'>
                    Home
                </Link>
            </li>
            <NavLinks />
        </ul>
        </div>
            </div>
        
            {/* </div> */}
            
        
    </nav>
    </div>
    
    </>
    
  )
}

export default Navbar