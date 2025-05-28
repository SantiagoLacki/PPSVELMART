import React from 'react';
import { useState, useEffect, createContext } from 'react';

export const DataContext = createContext();

const DataProvider = (props) => {
  const [menu,setMenu] = useState(false)
  const [carrito,setCarrito] = useState([])

  const [productos, setProductos] = useState([]);

  const addCarrito = (id) => {
    const productoExistente = carrito.find((item) => item.id === id);
      if (!productoExistente) {
        const nuevoProducto = productos.find((producto) => producto.id === id);
          if (nuevoProducto) {
            setCarrito([...carrito, nuevoProducto]);
          } 
          else {
            console.error(`Producto con id ${id} no encontrado en productos`);
          }
      }
      else {
        alert ("El producto ya se ha añadido al carrito.")
      }
  }

  const value = {
    productos: [productos,setProductos],
    menu: [menu, setMenu],
    addCarrito: addCarrito,
    carrito: [carrito,setCarrito]
  };

  return (
    <DataContext.Provider value = {value}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider;
