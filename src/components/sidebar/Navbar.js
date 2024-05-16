import React, {useState} from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {Link} from 'react-router-dom'
import {SidebarData} from "./SidebarData"
import {IconContext} from "react-icons"
import Avatar from '@mui/material/Avatar';


function Navbar() {
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <>
        <IconContext.Provider value={{ color: "undefined" }}>
          <div className="navbar">
            <Link to="#" className="menu-barslinks">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <div><h1 className="restaurantname">Platzhalter</h1></div>
            <div><Avatar alt="Bild vom Restaurant" src="https://cdn-icons-png.flaticon.com/512/5977/5977578.png" className="menu-barsrechts" /></div>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-barslinks">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
  }
  
  export default Navbar;