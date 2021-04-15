import React from 'react';
import { RichText, Text, Image } from '@sitecore-jss/sitecore-jss-react';
import classes from './Banner.module.css';
const Banner = (props) => (
  <div className={classes.Banner}>
    <Text tag="h3" field={props.fields.Title} />
    <RichText tag="p" field={props.fields.Description} />
    <Image field={props.fields.Image} className={classes.Image} />
    <a href={props.fields.Cta.value.href} className={classes.BtnBanner}>
      <span>{props.fields.Cta.value.text}</span>
    </a>
  </div>
);
export default Banner;
