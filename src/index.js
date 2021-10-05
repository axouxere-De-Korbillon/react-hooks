import React from 'react';
import ReactDOM from 'react-dom';

function Saludo({nombre, apellido}) {
  return <h1>Hola, {nombre} { apellido}</h1>;
}

const elemento = <Saludo nombre="Leixandra" apellido="Ruibal"/>;

ReactDOM.render(
  <div>
    <Saludo nombre=" Leixandra" apellido="Ruibal" />
  </div>,
  document.getElementById('root')
);
