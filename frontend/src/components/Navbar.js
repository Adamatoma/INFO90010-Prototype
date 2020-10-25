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
              <a className="navbar-links" href="/guideline">
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
      </IconContext.Provider>
    </>
  )
}

export default Navbar1
