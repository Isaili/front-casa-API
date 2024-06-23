import React, { useState } from 'react';

const Foco = () => {
  const [encendido, setEncendido] = useState(false);

  const toggleFoco = () => {
    setEncendido(!encendido);
  };

  const focoContainerStyle = {
    display: 'inline-block',  // Para que el contenedor abarque solo el contenido y no todo el ancho
    marginLeft: '125px',  // Cambiado a margen izquierdo de 20px
  };

  const focoStyle = {
    marginTop: '300px',
    width: '30px',
    height: '30px',
    borderRadius: '60%',
    backgroundColor: encendido ? 'yellow' : 'gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: encendido ? '0px 0px 20px rgba(255, 255, 0, 0.7)' : '0px 0px 10px rgba(0, 0, 0, 0.5)'
  };

  const buttonStyle = {
    marginTop: '5px',  // Espacio entre el foco y el botón
    padding: '5px 10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: encendido ? '#D32F2F' : '#4FC3F7',
    color: '#FFFFFF',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '12px',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div style={focoContainerStyle}>
      <div style={{ textAlign: 'center' }}>
        <div style={focoStyle} onClick={toggleFoco}>
          {encendido ? 'Encendido' : 'Apagado'}
        </div>
        <button style={buttonStyle} onClick={toggleFoco}>
          {encendido ? 'Apagar' : 'Encender'}
        </button>
      </div>
    </div>
  );
};

export default Foco;
