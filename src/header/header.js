import React from 'react';
import {ReactComponent as Search} from './icons/search.svg';
import {ReactComponent as Logo} from './icons/symbol_logo.svg';
import {ReactComponent as Heart} from './icons/heart.svg';
import {ReactComponent as Cart} from './icons/cart.svg';

import './header.scss';

function Header() {
    return(
        <header>
            <div className="left">
                <div className="menu_btn">
                    <div className="menu_btn-burger"></div>
                </div>
                <div className="icon search">
                    <Search />
                </div>
            </div>
            <div className="logo">
                <Logo />
            </div>
            <div className="right">
                <div className="likes">
                    <div className="icon">
                        <Heart />
                    </div>
                    <span className='number'> 9 </span>
                </div>
                <div className="cart">
                    <div className="icon">
                        <Cart />
                    </div>
                    <span className='number'> 3 </span>
                </div>
            </div>
        </header>
    );
}

export default Header;