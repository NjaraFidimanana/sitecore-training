import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';

const HeroComponent = (props) => (
  <div>
    <p>HeroComponent Component</p>
    <Text field={props.fields.heading} />
    <RichText field={props.fields.description} />
  </div>
);
export default HeroComponent;
