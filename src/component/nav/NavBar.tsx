import React from 'react';
import {Link} from 'react-router-dom'
import "./nav-bar.css";
import * as FaIcons from 'react-icons/fa'
import {IconContext} from 'react-icons';
import {Side_Bar_Data, Social_Media_Info} from "../../data";


function NavBar() {
    const redirectMedia = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault()
        window.open(path)
    }
    return (
        <>
            <IconContext.Provider value={{className: 'nav-icon'}}>
                <nav className='nav-menu'>
                    <ul className='nav-menu-items'>
                        <li className='nav-text'>
                            <Link to='#'>
                                <FaIcons.FaBars/>
                            </Link>
                        </li>
                        {Side_Bar_Data.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                    </Link>
                                </li>
                            );
                        })}

                        {Social_Media_Info.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <a href={item.path} onClick={(e) => redirectMedia(e, item.path)}>
                                        {item.icon}
                                    </a>
                                </li>
                            );
                        })}

                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default NavBar;