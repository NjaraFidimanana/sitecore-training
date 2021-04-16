import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import classes from './HeroSlider.css';
import Banner from '../Banner'
const HeroSlider = (props) => {
let heroSelection = props.fields['Hero Selection']
if(heroSelection === null || typeof heroSelection === 'undefined'){
    heroSelection = props.fields.items;
}
const params =props.params;
    return (
        <div className="HeroSlider">
            <p className={params.class}>Hero Slider</p>
            <Carousel showArrows={true}>
                {heroSelection && heroSelection.map((item,index)=>(
                    <Banner key={index} {...item}></Banner>
                    ))
                }
            </Carousel>
        </div>
    );
};
export default HeroSlider;
