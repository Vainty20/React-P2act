import React from 'react';

const Button = ({ bgColor, text, rounded }) => {
  const buttonStyle = {
    backgroundColor: bgColor,
    borderRadius: rounded ? '10px' : '0',
    padding: '10px 20px',
    color: 'white',
    display: 'block',
    margin: '10px auto',
  };

  return <button style={buttonStyle}>{text}</button>;
};

export default Button;