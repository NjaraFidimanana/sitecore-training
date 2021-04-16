import React from 'react';
const Contact = (props) => {
  const histories = props.fields.data.item && props.fields.data.item.children;
  return (
      <div className="contact-container">
          <span>Contact</span>
      </div>)
}

export default Contact;
