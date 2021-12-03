import React, { useState, useRef } from 'react'
import logo from './images/zohali_mini_logo.png'
import fulllogo from './images/zohali_logo_full.png'
import { BsArrowLeftSquareFill, BsSearch } from 'react-icons/bs'
import { IoIosHome } from 'react-icons/io'
import { SiAboutdotme } from 'react-icons/si'
import { GiShoppingBag } from 'react-icons/gi'
import { ImNewspaper } from 'react-icons/im'
import { MdMiscellaneousServices } from 'react-icons/md'
import MenuItem from './MainMenu/MenuItem'
import MainMenu from './MainMenu/MainMenu'



const SideMenu = () => {

    const [inactive, setinactive] = useState(false)
    const clickhandle = () => {
        setinactive(!inactive)
        console.log('run')
    }

    const searchTextInput = React.createRef();
    const focusTextInput = () => { searchTextInput.current.focus(); }
    return (
        <div className={!inactive ? ' inactive' : 'side-menu '} >


            <div className={!inactive ? "header-backround" : 'active-header-backround'}>
                <div className={!inactive ? ' search-header-container' : 'hidden-search-header-container'}>
                    <input type="search" placeholder='Search' className="search-header" />
                    <div className='icon-search-header'>
                        <BsSearch />
                    </div>
                </div>
            </div>

            <div className="top-section">

                <div className="logo-container">
                    <img src={!inactive ? logo : fulllogo} alt="user" className={!inactive ? 'logo' : 'logo-full'} />
                </div>


                <div className={inactive ? "toggle-menu-btn " : 'inactive-menu-btn'} onClick={clickhandle}  >
                    <BsArrowLeftSquareFill />
                </div>

                <div className="search-container">
                    <div >
                        <div className={inactive ? "search-controller" : '  search-controller-hidden'}>
                            <button className='inactive-search-controller' onClick={!inactive ? clickhandle : null}  ><BsSearch /></button>
                            <input type="search" placeholder='Search' />
                        </div>
                    </div>
                </div>
                <div className="divider"></div>

                <div className="main-menu">

                    <MenuItem
                        mainMenu={[
                            { name: 'Home', icon: <IoIosHome />, to: 'home', inactive_side_menu: inactive ? clickhandle : null },
                            { name: 'About', icon: <SiAboutdotme />, to: 'about', inactive_side_menu: inactive ? clickhandle : null },
                            { name: 'Store', icon: <GiShoppingBag />, to: 'store', inactive_side_menu: inactive ? clickhandle : null },
                            { name: 'News', icon: <ImNewspaper />, to: 'news', inactive_side_menu: inactive ? clickhandle : null },
                            { name: 'Services', icon: <MdMiscellaneousServices />, to: 'services', inactive_side_menu: inactive ? clickhandle : null },
                        ]}

                    />
                </div>
            </div>
        </div>
    )
}

export default SideMenu
