import React from 'react';
import { Link } from 'react-router-dom';

import SearchInput from '../search-input';
 
import {ReactComponent as Logo} from './icons/symbol_logo.svg';
import {ReactComponent as Heart} from './icons/heart.svg';
import {ReactComponent as Cart} from './icons/cart.svg';
import {ReactComponent as User} from './icons/user.svg';

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
                        <Link to="/">
                            <Logo />
                        </Link>
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
                            <Link to="/foo">Женщинам</Link>
                            <Link to="/foo">Мужчинам</Link>
                            <Link to="/foo">Детям</Link>
                            <Link to="/">Home</Link>
                        </div>
                        <div className="logo">
                            <Link to="/">
                                <Logo />
                            </Link>
                        </div>
                        <div className="right">
                            <span className="phone_num">
                                <a href="tel:0443657979">
                                    044 365 79 79
                                </a>
                            </span>
                            <div className="link"><Link to="/foo">Магазины</Link></div>
                            <div className="link">
                                <Link to="/foo">Сервис</Link>
                                <div className="triangle-down"></div>
                            </div>
                            <div className="link">
                                <Link to="/foo">Рус</Link>
                                <div className="triangle-down"></div>
                            </div>
                        </div>
                    </div>
                    <div className="subhead">
                        <div className="left">
                            <Link to="/foo">Одежда</Link>
                            <Link to="/foo">Обувь</Link>
                            <Link to="/foo">Аксессуары</Link>
                            <Link to="/foo">Белье</Link>
                            <Link to="/foo">Бренды</Link>
                            <Link to="/foo">Sale</Link>
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