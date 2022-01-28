import React from 'react';
import './messagebox.css';

function Messagebox({ username, message }) {

  const isUser = username === message.username;
  
    return <div className={!isUser ? `box` : `box__nouser`}>
      <p>{!isUser && `(${message.username || 'Unknown'}):-`} { message.message }</p> 
  </div>;
}

export default Messagebox;
