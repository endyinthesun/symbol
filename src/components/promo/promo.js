import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './promo.scss';

function Promo({contentData}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true
      };
      const content = contentData.map(({imgName, title}) => {
        const src = require(`./img/${imgName}.png`).default;

        return(
            <div className='slide'>
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
            </div>
        );
      });
    return(
        <Slider 
            {...settings}
        >
            {content}            
        </Slider>
    );
}

export default Promo;