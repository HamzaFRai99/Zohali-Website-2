import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { BsCartDash, BsCartDashFill, BsSearch } from 'react-icons/bs'
import { MdDoubleArrow, MdFavoriteBorder, MdFavorite, MdSearch } from 'react-icons/md'


import './ItemsStyles.css'

function Items(props) {
    const [clickCart, setCartClick] = useState(false);
    const [clickFav, setFavClick] = useState(false);

    const clickHandleCart = () => setCartClick(!clickCart);
    const clickHandleFav = () => setFavClick(!clickFav);




    return (
<div className='header-container'>
<div >
        <div className='items-page'>

            {/* <MdSearch className='Favorite-Border-icon' /> */}

  
            
            <div className="nav-right-icons-container">
                          <div onClick={clickHandleFav}>
                {clickFav ? <MdFavorite className='Favorite-Border-icon-red' /> : <MdFavoriteBorder className='Favorite-Border-icon' />}
            </div>


            <div  onClick={clickHandleCart}>
                {clickCart ?  <BsCartDashFill className='cart-icon-red' /> :<BsCartDash className='cart-icon' /> }
            </div>
                <button className='signinBtn'>Sign-In</button>

            </div>

</div>
        </div>
        </div>
    )



}





export default Items
