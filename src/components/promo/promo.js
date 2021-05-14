import React from 'react';
import Slider from "react-slick";

import {ReactComponent as NextArrowIcon} from './icons/next_arrow.svg';
import {ReactComponent as PrevArrowIcon} from './icons/prev_arrow.svg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './promo.scss';

function Promo({contentData, layout}) {
        const Arrow = ({className, onClick, arrow}) => {
            return(
                <div
                    className={className}
                    onClick={onClick}
                >
                    {arrow}
                </div>
            );
        }
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true
        };
        
        const OnMobile = layout.is('mobile');
        const OnDeskAndBigDesk = layout.isAtLeast('tablet');
        const generateContent = (mobile) => {
            const slides = contentData.map(({imgName, title, id}) => {
                const src = require(`./img/${imgName}.png`).default;

                const slide = mobile ? 
                            ( <>
                                <div className="slide_figure">
                                    <img src={src} alt={imgName}/>
                                </div>
                                <div className='slide_title'>
                                    <span>{title}</span>
                                </div>
                                <div className='slide_link'>
                                    <div className="slide_link_wrapper">
                                        <a href="/">
                                            Подробнее
                                        </a>
                                    </div>
                                </div>
                            </> ) :
                                
                            (<div className="slide_figure">
                                <div className="slide_block">
                                    <div className='slide_block_title'>
                                        <span>{title}</span>
                                    </div>
                                    <div className='slide_block_link'>
                                        <div className="slide_block_link_wrapper">
                                            <a href="/">
                                                Подробнее
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <img src={src} alt={imgName}/>
                            </div> );
                return(
                    <div 
                        className='slide' 
                        key={id}
                    >
                        {slide}
                    </div>
                );
              });

              return slides;
        }
    return(
        <section className="promo">
            <OnMobile>
                <Slider 
                    {...settings}
                    dots = {true}
                >
                    {generateContent(true)}
                </Slider>  
            </OnMobile>
            <OnDeskAndBigDesk>
                <Slider 
                    {...settings}
                    nextArrow = {<Arrow arrow={<NextArrowIcon />}/>}
                    prevArrow = {<Arrow arrow={<PrevArrowIcon />}/>}
                >
                    {generateContent(false)}
                </Slider>  
            </OnDeskAndBigDesk>
        </section>
    );
}

export default Promo;