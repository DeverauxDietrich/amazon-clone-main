import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return <nav className='header'>
        
        
        {/*logo */}
    <Link to="/">
        <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='amazon-logo'></img>
    </Link>
        
        {/* search */}

    <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
    </div>
 
        
        {/* links */}

    <div className="header__nav">

        {/* first link */}

        <Link to="/login" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Hello Deveraux</span>
                 <span  className="header__optionLineTwo">Sign in</span>
            </div>
        </Link>

        {/* second link */}

        <Link to="/login" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& orders</span>
            </div>
        </Link>

        {/* third link */}

        <Link to="/login" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>
        </Link>

        {/* basket icon */}
        <Link to="/checkout" className="header__link">
            <div className="header__optionsBasket">
                <ShoppingBasketIcon/>
                <span className="header__optionLineTwo header__basketCount">0</span>
            </div>
        </Link>
    
    
    </div>

        {/* basket */}

  </nav>;
  
}

export default Header