import React from 'react';
import Hola from './Saludos';
import Adios from './Despedida';

function App() {

  let respuesta;
  const situacion = true

  if (situacion == true) {
    respuesta = <Hola/>  
  } else if (situacion == false) {
    respuesta = <Adios/>  
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{respuesta}</h1>
      <p>Este es un proyecto de React para verificar si funciona.</p>
    </div>
  );
}

export default App;
