import React, {useEffect} from 'react';

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
    // const linksBlocks = Array.from(document.getElementsByClassName('block'));
    // linksBlocks.forEach((block) => {
    //     block.addEventListener('click', (e) => {
    //         // e.currentTarget.classList.toggle('open');
    //         console.log(e.currentTarget.classList.contains('open'));
    //         if(e.currentTarget.classList.contains('open')) {
    //             e.currentTarget.classList.remove('open');
    //         } else {
    //             e.currentTarget.classList.add('open');
    //         } 
    //     })
    // });
    
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
                            <a href="/">
                                <Logo />
                            </a>
                        </div>
                        <div className="social">
                            <a href="/">
                                <Inst />
                            </a>
                            <a href="/">
                                <Facebook />
                            </a>
                            <a href="/">
                                <Youtube />
                            </a>
                            <a href="/">
                                <Telegram />
                            </a>
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
                                    <div><a href="/">О нас</a></div>
                                </div>
                                <div className="link">
                                    <div><a href="/">Магазины</a></div>
                                </div>
                                <div className="link">
                                    <div><a href="/">Карта сайта</a></div>
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
                                    <div><a href="/">Оплата и доставка</a></div>
                                </div>
                                <div className="link">
                                    <div><a href="/">Возврат и обмен</a></div>
                                </div>
                                <div className="link">
                                    <div><a href="/">Вопросы и ответы</a></div>
                                </div>
                                <div className="link">
                                    <div><a href="/">Бонусная программа</a></div>
                                </div>
                                <div className="link">
                                    <div><a href="/">Контакты</a></div>
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
                                    <div><a href="/">Заказы</a></div>
                                </div>
                                <div className="link">
                                    <div><a href="/">Данные </a></div>
                                </div>
                                <div className="link">
                                    <div><a href="/">Избранное</a></div>
                                </div>
                                <div className="link">
                                    <div><a href="/">Подписки</a></div>
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