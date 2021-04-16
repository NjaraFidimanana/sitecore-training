import React from 'react';
import { RichText, Text, Image } from '@sitecore-jss/sitecore-jss-react';
import './CardView.css';
/* Static resolution for images */
const CardView = (props) => {
  console.log('Image',props.image)
  return (<div className="card-container Card">
        <div className="box-list-item box-logo-button-item">
            <a href={props.url}>
                <div className="Logo">
                { props.image && <Image field={props.image.jss} className="ImgCard" width="50%" height="50%" />}
                </div>
                <div className="content">
                  <Text tag="h6" field={props.title} />
                  <RichText tag="p" field={props.description} />
                </div>
            </a>

	    </div>
  </div>)
};
export default CardView;
