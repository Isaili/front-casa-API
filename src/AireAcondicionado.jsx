import React, { useState } from 'react';

const AireAcondicionado = () => {
  const [encendido, setEncendido] = useState(false);

  const toggleAire = () => {
    setEncendido(!encendido);
  };

  const aireStyle = {
    width: '100px',  // Reducido a la mitad
    height: '50px',  // Reducido a la mitad
    borderRadius: '5px',  // Ajustado para ser proporcional
    backgroundColor: encendido ? '#4FC3F7' : '#B0BEC5',  // Azul claro cuando está encendido, gris cuando está apagado
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #607D8B',  // Reducido para ser proporcional
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',  // Ajustado para ser proporcional
    margin: '10px auto',  // Reducido para ser proporcional
    marginTop: '-490px',
    marginRight: '90px',  
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    position: 'relative',
    
  };

  const displayStyle = {
    width: '80%',
    height: '10px',  // Reducido a la mitad
    backgroundColor: encendido ? '#D32F2F' : '#FFFFFF',  // Rojo cuando está encendido, blanco cuando está apagado
    borderRadius: '2.5px',  // Ajustado para ser proporcional
    marginBottom: '5px',  // Reducido para ser proporcional
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '10px',  // Reducido para ser proporcional
    color: encendido ? '#FFFFFF' : '#000000',
    boxShadow: encendido ? '0px 0px 4px rgba(255, 0, 0, 0.5)' : 'none',  // Ajustado para ser proporcional
    textTransform: 'uppercase'
  };

  const toggleButtonStyle = {
    padding: '5px 10px',  // Reducido a la mitad
    borderRadius: '2.5px',  // Ajustado para ser proporcional
    border: 'none',
    backgroundColor: encendido ? '#D32F2F' : '#4FC3F7',  // Rojo cuando está encendido, azul claro cuando está apagado
    color: '#FFFFFF',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '10px',  // Reducido para ser proporcional
    transition: 'background-color 0.3s ease'
  };

  return (
    <div style={aireStyle} onClick={toggleAire}>
      <div style={displayStyle}>
        {encendido ? 'ON' : 'OFF'}
      </div>
      <button style={toggleButtonStyle} onClick={toggleAire}>
        {encendido ? 'Apagar' : 'Encender'}
      </button>
    </div>
  );
};

export default AireAcondicionado;

