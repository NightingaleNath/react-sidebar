import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AaIcons from 'react-icons/ai'
import Sidebar from './Sidebar';
import './Navbar.css'
import { IconContext } from 'react-icons/lib';

function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
           <IconContext.Provider value={{color:'#fff'}}>
               <div className='navbar'>
              <Link to="#" className='menu-bars'>
                  <FaIcons.FaBars onClick={showSidebar}/>
              </Link>
           </div> 

           <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
               <ul className='nav-menu-items' onClick={showSidebar}>
                  <li className='navbar-toggle'>
                      <Link to="#" className='menu-bars'>
                          <AaIcons.AiOutlineClose />
                      </Link>
                  </li>
                  {Sidebar.map(item => {
                      return(
                          <li key={item.id} className={item.cName}>
                              <Link to={item.url}>
                                  {item.icons}
                                  <span>
                                      {item.title}
                                  </span>
                              </Link>
                          </li>
                      )
                  })}
               </ul>
           </nav>
           </IconContext.Provider>
        </>
    )
}

export default Navbar
