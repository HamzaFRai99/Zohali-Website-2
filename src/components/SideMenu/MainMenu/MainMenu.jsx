import React from 'react'
import { IoIosHome } from 'react-icons/io'
import { GiShoppingBag } from 'react-icons/gi'
import { ImNewspaper } from 'react-icons/im'
import { MdMiscellaneousServices } from 'react-icons/md'
import { SiAboutdotme } from 'react-icons/si'

import './MainMenuStyles.css'
import MenuItem from './MenuItem'


const MainMenu = () => {
    return (
        <div>
            <div className="main-menu">

                <MenuItem
                    mainMenu={[
                        { name: 'Home', icon: <IoIosHome /> ,to:'home' , },
                        { name: 'About', icon: <SiAboutdotme />,to:'about'  },
                        { name: 'Store', icon: <GiShoppingBag />,to:'store'  },
                        { name: 'News', icon: <ImNewspaper /> ,to:'news' },
                        { name: 'Services', icon: <MdMiscellaneousServices />,to:'services'},
                    ]}

                />
            </div>
        </div>
    )
}

export default MainMenu
