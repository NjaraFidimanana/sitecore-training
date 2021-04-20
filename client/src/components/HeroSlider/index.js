import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { RichText, Text, Image } from '@sitecore-jss/sitecore-jss-react';
import classes from './HeroSlider.css';
{/* import Banner from '../Banner'*/}
const HeroSlider = (props) => {
let heroSelection = props.fields['Hero Selection']
if(heroSelection === null || typeof heroSelection === 'undefined'){
    heroSelection = props.fields.items;
}
const params =props.params;
    return (
        <div className="HeroSlider">
                {/* Retrieve parameter from sitecore
                  <p style={{color:params.TextColor}}>Hero Slider</p>
                   <Carousel showArrows={!!params.ShowArrows}>*/}
            <p>Hero Slider</p>
            <Carousel showArrows={true}>
                {heroSelection && heroSelection.map((item,index)=>(
                    /* Uncomment Banner and remove the section*/
                    /* <Banner key={index} {...item}></Banner>*/
                    <div className="Banner" key={index}>
                        <Text tag="h3" field={item.fields.Title} />
                        <RichText tag="p" field={item.fields.Description} />
                        <Image field={item.fields.Image} className="Image" />
                        <a href={item.fields.Cta.value.href} className="BtnBanner">
                        <span>{item.fields.Cta.value.text}</span>
                        </a>
                  </div>
                    ))
                }
            </Carousel>
        </div>
    );
};
export default HeroSlider;
