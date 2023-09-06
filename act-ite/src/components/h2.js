import React from 'react';

const H2 = ({ children }) => {
  const h2Style = {
    textAlign: 'center',
  };

  return <h2 style={h2Style}>{children}</h2>;
};

export default H2;
