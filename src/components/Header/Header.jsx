import React from 'react'
import {Link} from 'react-router-dom';

import DesktopMenu from './header-components/DesktopMenu';
import HeaderButtons from './header-components/HeaderButtons';
import Logo from '../../assets/image/Logo.svg';
import LogoIcon from '../../assets/image/Logo-icon.svg';
const Header = () => {
  return (
    <header className='header flex h-[125px]'>
        <ul className='w-full flex items-center px-[20px]'>
            <li className="w-4/12 relative">
              <Link to='/' className='z-20 relative'><img src={Logo} alt="Hexa Squad Logo" className='md:logo hidden ' /><img src={LogoIcon} alt="Hexa Squad Logo" className='logo md:hidden' /></Link>
                <svg  viewBox="0 0 476 222" fill="none" xmlns="http://www.w3.org/2000/svg" className='logo-bg'>
                    <path d="M478.428 219.682L200.994 217.817C90.54 217.075 1.60087 126.932 2.34319 16.4778L2.45285 0.160375" stroke="#757575" stroke-opacity="0.1" stroke-width="3"/>
                </svg>
            </li>
            <li className="w-4/12 ">
              <DesktopMenu/>
            </li>
            <li className="w-4/12 ">
              <HeaderButtons/>
            </li>
            <li className="hidden "></li>
        </ul>
    </header>
  )
}

export default Header