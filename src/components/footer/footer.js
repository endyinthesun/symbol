import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from './icons/symbol_logo.svg';
import {ReactComponent as Inst} from './icons/inst.svg';
import {ReactComponent as Facebook} from './icons/facebook.svg';
import {ReactComponent as Youtube} from './icons/youtube.svg';
import {ReactComponent as Telegram} from './icons/telegram.svg';
import {ReactComponent as Visa} from './icons/visa.svg';
import {ReactComponent as Mastercard} from './icons/mastercard.svg';
import {ReactComponent as Spiral} from './icons/spiral.svg';

import './footer.scss';

function Footer() {
    useEffect(() => {
        const linksBlocks = Array.from(document.getElementsByClassName('block_head'));
        linksBlocks.forEach((block) => {
            block.addEventListener('click', ({currentTarget}) => {
                currentTarget.classList.toggle('open')
            })
        });
    })
    return(
        <footer className='footer'>
            <div className="footer_wrapper">
                <div className="footer_block">
                    <div className="footer_icons">
                        <div className="logo">
                            <Link to="/">
                                <Logo />
                            </Link>
                        </div>
                        <div className="social">
                            <Link to="/foo">
                                <Inst />
                            </Link>
                            <Link to="/foo">
                                <Facebook />
                            </Link>
                            <Link to="/foo">
                                <Youtube />
                            </Link>
                            <Link to="/foo">
                                <Telegram />
                            </Link>
                        </div>
                        <div className="pay">
                            <Visa />
                            <Mastercard />
                        </div>
                    </div>
                    <div className="footer_nav">
                        <div className="block">
                            <div className="block_head">
                                <span className="block_head_title">о компании</span>
                                <div className="block_head_triangle"></div>
                            </div>
                            <div className="block_links">
                                <div className="link">
                                    <div><Link to="/foo">О нас</Link></div>
                                </div>
                                <div className="link">
                                    <div><Link to="/foo">Магазины</Link></div>
                                </div>
                                <div className="link">
                                    <div><Link to="/foo">Карта сайта</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block_head">
                                <span className="block_head_title">сервис</span>
                                <div className="block_head_triangle"></div>
                            </div>
                            <div className="block_links">
                                <div className="link">
                                    <div><Link to="/foo">Оплата и доставка</Link></div>
                                </div>
                                <div className="link">
                                    <div><Link to="/foo">Возврат и обмен</Link></div>
                                </div>
                                <div className="link">
                                    <div><Link to="/foo">Вопросы и ответы</Link></div>
                                </div>
                                <div className="link">
                                    <div><Link to="/foo">Бонусная программа</Link></div>
                                </div>
                                <div className="link">
                                    <div><Link to="/foo">Контакты</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block_head">
                                <span className="block_head_title">личный кабинет</span>
                                <div className="block_head_triangle"></div>
                            </div>
                            <div className="block_links">
                                <div className="link">
                                    <div><Link to="/foo">Заказы</Link></div>
                                </div>
                                <div className="link">
                                    <div><Link to="/foo">Данные </Link></div>
                                </div>
                                <div className="link">
                                    <div><Link to="/foo">Избранное</Link></div>
                                </div>
                                <div className="link">
                                    <div><Link to="/foo">Подписки</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block_head">
                                <span className="block_head_title">контакты</span>
                                <div className="block_head_triangle"></div>
                            </div>
                            <div className="block_links" id='contacts'>
                            <div className="link">
                                    <div id='phone'>
                                        <a href="tel:0443657979">044 365 79 79</a>
                                    </div> 
                            </div>
                            <div className="link">
                                    <div>
                                        <a href="mailto:info@symbol.ua">info@symbol.ua</a>
                                    </div> 
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_copyright">
                    <div className="footer_copyright_text">
                        © 2020 Symbol All Rights Reserved
                    </div>
                    <div className="footer_copyright_rsr">
                        <span>RSR by</span>
                        <Spiral />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;