import React, { useState } from "react";



export default function Count() {

  const [numero, setNumero] = useState(0);
  
  const handleIncrement = () => {
    
    setNumero(numero + 1);
  };

  const handleDecrement = () => {
     setNumero(numero - 1);

   
  };

  const onAdd = () => {
     console.log( "el usuario agregago la compra");
 
  };

 return (
    <div className="Count">
      
      <p aling-item="center">{numero}</p>
      <button onClick={handleIncrement} disabled={numero === 5}>INCREMENTAR</button>
      <button onClick={handleDecrement} disabled={numero === 0}>DECREMENTAR</button>
      <button onClick={onAdd}>AGREGAR</button>
    </div>
  );
}

