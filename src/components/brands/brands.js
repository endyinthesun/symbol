import React from 'react';
import Slider from "react-slick";

import {ReactComponent as Valentino} from './img/valentino.svg';
import {ReactComponent as TwinsetMilano} from './img/twinset_milano.svg';
import {ReactComponent as Prada} from './img/prada.svg';
import {ReactComponent as MaxMara} from './img/max_mara.svg';
import {ReactComponent as JimmyChoo} from './img/jimmy_choo.svg';
import {ReactComponent as Gucci} from './img/gucci.svg';
import {ReactComponent as DolceGabbana} from './img/dolce_gabbana.svg';
import {ReactComponent as BrunelloCucinelli} from './img/brunello_cucinelli.svg';
import {ReactComponent as BalmainParis} from './img/balmain_paris.svg';
import {ReactComponent as Balenciaga} from './img/balenciaga.svg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './brands.scss';

function Brands ({ layout }) {
    const OnMobile = layout.is('mobile');
    const OnTablet = layout.is('tablet');
    const OnDeskAndBigDesk = layout.isAtLeast('desktop');

    const settings = {
        dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true
    }

    let brandsIcon = [
        <MaxMara key='maxmara'/>,
        <Valentino key='valentino'/>,
        <DolceGabbana key='dolcegabbana'/>,
        <JimmyChoo key='jimmychoo'/>,
        <Prada key='prada'/>,
        <TwinsetMilano key='twinset'/>,
        <Gucci key='gucci'/>,
        <BrunelloCucinelli key='brunello'/>,
        <BalmainParis key='balmain'/>,
        <Balenciaga key='balenciaga'/>,
    ];
    brandsIcon = brandsIcon.map((icon) => {
        return(
            <div className="brand">
                {icon}
            </div>
        );
    })
    const generateIcon = (amountIcon = brandsIcon.length) => {
        let amountSlide = Math.ceil(brandsIcon.length / amountIcon);
        let slides = [];
        for(let i = 0; i < amountSlide; i++) {
            slides[i] = (
                    brandsIcon.slice((i*amountIcon), (i*amountIcon) + amountIcon)
            );
        }
        slides = slides.map((el) => {
            let newSlide = [];
            const amountIconInBlock = amountIcon/2;
            for(let j = 0; j < (el.length/amountIconInBlock); j++) {
                newSlide[j] = (
                    <div className="part">
                        {el.slice((j*(amountIconInBlock)), (j*(amountIconInBlock)) + (amountIconInBlock))}
                    </div>
                );
            }
            return (
                <>
                    {newSlide}
                </>
            );
        })
        return slides;
    };
    return(
        <section className="brands">
            <div className="brands_wrapper">
                <OnMobile>
                    <Slider 
                        {...settings}
                        dots = {true}
                    >
                            {generateIcon(4)}
                    </Slider> 
                </OnMobile>
                <OnTablet>
                    <Slider 
                        {...settings}
                        dots = {true}
                    >
                            {generateIcon(6)}
                    </Slider> 
                </OnTablet>
                <OnDeskAndBigDesk>
                    {generateIcon()}
                </OnDeskAndBigDesk>
                <div className="all_brands">
                    <button className="all_brands_btn">
                        все бренды
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Brands;