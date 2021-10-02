import React from "react";
import "./saludo.css";

// export default function Saludo({nombre}) {
//   return (
//     <div className="misaludo">
//       <h1 >Hola { nombre }!</h1>
//     </div>
//   );


export default function Saludo ({nombre}){
  const misaludo = () => <h1>Hola { nombre }</h1>;
  return <div className="misaludo">{misaludo()}</div>;
}