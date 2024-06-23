import React from 'react';

const Cuadro = ({ children }) => (
  <div
    style={{
      width: '600px',
      height: '550px',
      border: '7px solid black',
      position: 'relative',
      top: '50%',
      left: '50%',
      marginRight: '1000px', 
      marginTop: '500px', 
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    }}
  >
    {children}
  </div>
);

export default Cuadro;
