import React from 'react';
import { RichText, Text, Image } from '@sitecore-jss/sitecore-jss-react';
import './CardView.module.css';
const CardView = (props) => (
  <div className="card-container">
        <li className="box-list-item box-logo-button-item">
            <a href={props.url}>
                <div className="Logo">
                <Image field={props.image.jss} className="ImgCard" width="300px" height="150px" />
                </div>
                <div className="content">
                  <Text tag="h6" field={props.title} />
                  <RichText tag="p" field={props.description} />
                </div>
            </a>

	    </li>
  </div>
);
export default CardView;
