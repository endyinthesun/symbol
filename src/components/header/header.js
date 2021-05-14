import React from 'react';
import {ReactComponent as Logo} from './icons/symbol_logo.svg';
import {ReactComponent as Heart} from './icons/heart.svg';
import {ReactComponent as Cart} from './icons/cart.svg';
import {ReactComponent as User} from './icons/user.svg';
import SearchInput from '../search-input';
 
import './header.scss';

function Header({layout}) {
    const OnMobileAndTablet = layout.isAtMost('tablet');
    const OnDeskAndBigDesk = layout.isAtLeast('desktop');
    
    return(
        <header className='header'>
            <OnMobileAndTablet>
                <div className="left">
                    <div className="menu_btn">
                        <div className="menu_btn-burger"></div>
                    </div>
                    <SearchInput 
                        placeholder=''
                    />
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
            </OnMobileAndTablet>
            <OnDeskAndBigDesk>
                <div className="head">
                    <div className="left">
                        <a href="/">Женщинам</a>
                        <a href="/">Мужчинам</a>
                        <a href="/">Детям</a>
                        <a href="/">Home</a>
                    </div>
                    <div className="logo">
                        <Logo />
                    </div>
                    <div className="right">
                        <span className="phone_num">
                            <a href="tel:0443657979">
                                044 365 79 79
                            </a>
                        </span>
                        <div className="link"><a href="/">Магазины</a></div>
                        <div className="link">
                            <a href="/">Сервис</a>
                            <div className="triangle-down"></div>
                        </div>
                        <div className="link">
                            <a href="/">Рус</a>
                            <div className="triangle-down"></div>
                        </div>
                    </div>
                </div>
                <div className="subhead">
                    <div className="left">
                        <a href="/">Одежда</a>
                        <a href="/">Обувь</a>
                        <a href="/">Аксессуары</a>
                        <a href="/">Белье</a>
                        <a href="/">Бренды</a>
                        <a href="/">Sale</a>
                    </div>
                    <div className="right">
                        <div className="search_bar">
                        <SearchInput 
                            placeholder='Поиск по товарам и брендам...'
                        />
                            
                        </div>
                        <div className="profile_bar">

                            <div className="icon user">
                                <User />
                            </div>
                            <div className="likes">
                                <div className="icon">
                                    <Heart />
                                </div>
                                <div className="number"> 9 </div>
                            </div>
                            <div className="cart">
                                <div className="icon">
                                    <Cart />
                                </div>
                                <div className="number"> 3 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OnDeskAndBigDesk>
        </header>
    );
}

export default Header;