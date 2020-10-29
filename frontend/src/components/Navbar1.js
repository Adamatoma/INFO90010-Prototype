import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar1.css';
import { IconContext } from 'react-icons';

function Navbar1() {
  const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <ul className="navbar-item">
            <li>
              <a className="navbar-links" href="/">
                Homepage
              </a>
            </li>
            <li>
              <a className="navbar-links" href="/guideline/sign-the-lease">
                Guidelines
              </a>
            </li>
            <li>
              <a className="navbar-links" href="/pricecomparison">
                Price Comparison
              </a>
            </li>
          </ul>
        </div>
        <nav className={sidebar ? 'nav-menu' : 'nav-menu active'}>
          <ul className='nav-menu-items'>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span> {item.title} </span>
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

export default Navbar1
