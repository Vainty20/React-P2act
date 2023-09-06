import React from 'react';

const TextField = ({ id, bgColor, rounded, border }) => {
  const textFieldStyle = {
    backgroundColor: bgColor,
    borderRadius: rounded ? '10px' : '0',
    borderBottom: border ? '5px solid black' : 'none',
    padding: '10px',
    margin: '10px auto',
    display: 'block',
  };

  return <input type="text" id={id} style={textFieldStyle} />;
};

export default TextField;
