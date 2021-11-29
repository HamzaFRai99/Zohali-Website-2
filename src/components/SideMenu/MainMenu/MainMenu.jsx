import React from 'react'
import { IoIosHome } from 'react-icons/io'
import { GiShoppingBag } from 'react-icons/gi'
import { ImNewspaper } from 'react-icons/im'
import { MdMiscellaneousServices } from 'react-icons/md'
import { SiAboutdotme } from 'react-icons/si'

import './MainMenuStyles.css'


const MainMenu= () => {
    return (
        <div>
            <div className="main-menu">
                <ul>
                    <li>
                        <i className='item-container'>
                            <a href="#" className="menu-item">Home</a>
                            <div className="menu-icon-item">
                                <IoIosHome />
                            </div>
                        </i>
                    </li>
                    <li>
                        <i className='item-container'>
                            <a href="#" className="menu-item">About</a>
                            <div className="menu-icon-item">
                                <SiAboutdotme />
                            </div>
                        </i>
                    </li>
                    <li>
                        <i className='item-container'>
                            <a href="#" className="menu-item">Store</a>
                            <div className="menu-icon-item">
                                <GiShoppingBag />
                            </div>
                        </i>
                    </li>
                    <li>
                        <i className='item-container'>
                            <a href="#" className="menu-item">News</a>
                            <div className="menu-icon-item">
                                <ImNewspaper />
                            </div>
                        </i>
                    </li>
                    <li>
                        <i className='item-container'>
                            <a href="#" className="menu-item">Services</a>
                            <div className="menu-icon-item">
                                <MdMiscellaneousServices />
                            </div>
                        </i>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default MainMenu
