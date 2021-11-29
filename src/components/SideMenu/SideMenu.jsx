import React, { useState, useRef } from 'react'
import logo from './images/zohali_mini_logo.png'
import fulllogo from './images/zohali_logo_full.png'
import { BsArrowLeftSquareFill, BsSearch } from 'react-icons/bs'
import MainMenu from './MainMenu/MainMenu'



const SideMenu = (props) => {

    const [inactive, setinactive] = useState(false)
    const clickhandle = () => {
        setinactive(!inactive)
        console.log('run')
    }

    const clickstatic = () => {
        setinactive(inactive)
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
                    <div className={inactive ? "search-controller" : '  search-controller-hidden'}>
                        <button className='inactive-search-controller' onClick={!inactive ? clickhandle : clickstatic}  ><BsSearch /></button>
                        <input type="search" placeholder='Search' />
                    </div>
                </div>

                <div className="divider"></div>

                <MainMenu />
            </div>

        </div>
    )
}

export default SideMenu
