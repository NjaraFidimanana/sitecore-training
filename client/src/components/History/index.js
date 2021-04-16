import React from 'react';
import { Placeholder} from '@sitecore-jss/sitecore-jss-react';
import CardView from '../CardView'
const History = (props) => {
  const histories = props.fields.data.item && props.fields.data.item.children;
  return (
      <div className="history-container">
          <span>History</span>
          { histories && histories.map((item,index)=>(
                    <CardView key={index} {...item}></CardView>
                    ))
          }
          <Placeholder name="jss-history" rendering={props.rendering}/>
      </div>)
}

export default History;
