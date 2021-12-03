import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {

    const {
        mainMenu
    } = props;




    return (
        <>
            <ul>
                { mainMenu.length > 0 ? (
                    mainMenu.map((item, index) =>
                        <li key={index}>
                            <i >
                                <NavLink to={`/${item.to}`} className="menu-item item-container " onClick={item.inactive_side_menu} exact> 
                                <span className="menu-icon-item "> {item.icon}</span>
                                 {item.name}
                                </NavLink>
                            </i>
                        </li>
                    )) : null}
            </ul>


        </>
    )
}

export default MenuItem
