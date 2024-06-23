import React from 'react';

const Pared = ({ ancho, alto, margenDerecho = 0, margenTop = 0, margenIzquierdo = 0, horizontal = false }) => {
  const estiloPared = {
    backgroundColor: 'black',
    position: 'absolute',
    width: horizontal ? `${ancho}px` : `${alto}px`,
    height: horizontal ? `${alto}px` : `${ancho}px`,
    top: horizontal ? `${margenTop}px` : 'auto',
    left: horizontal ? `${margenIzquierdo}px` : 'auto',
    right: !horizontal ? `${margenDerecho}px` : 'auto',
    bottom: !horizontal ? `${margenTop}px` : 'auto',
  };

  return <div style={estiloPared} />;
};

export default Pared;
