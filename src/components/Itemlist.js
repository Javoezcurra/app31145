import React, { useEffect, useState, useCallback } from "react";



const promiselist = () => {

  return new Promise ((resolve) =>{

  setTimeout(() => {
   resolve ([
   { id: 1,destacado: true, name: "El señor de los anillos: trilogía", price: "$5500" },
   { id: 2,destacado: false, name:  "Todo lo que cabe en los bolsillos", price: "$1300" },
   { id: 3,destacado: true, name: "Harry Potter y el calíz de fuego", price: "$1100" },
   { id: 4,destacado: false, name: "Otelo", price: "$600" },
   { id: 5,destacado: true,  name: "Las flores del mal", price: "$450" },
   { id: 6,destacado: false, name: "Cronicas del angel gris", price: "$1100" },
    ])},
   1500);

   });
};




export const Itemlist = () => {

  const [products, setProductos] = useState([]);

  const consultPromise = useCallback(
    
    async() => {
      const productoFiltrado = await promiselist().then((data) => data.filter((product) =>product.destacado))
        setProductos(productoFiltrado); 
      
        
         
    },

    [promiselist],
  )
  
    
  
  useEffect(() => {
    consultPromise();

  },[consultPromise])  
  
  return (
    <>
      {products.length === 0 ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
          <h1>{products.length}</h1>
        </>
      )}


    </>
  );


};


