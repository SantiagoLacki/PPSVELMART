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










// export const DataContext = createContext();

// const DataProvider = ({ children }) => {
//   const [productos, setProductos] = useState([]); // Inicializa con un array vacío

//   useEffect(() => {
//     const obtenerDatos = async () => {
//       try {
//         const respuesta = await fetch('../../Data.js');
//         const datos = await respuesta.json();

//         const productosProcesados = datos.items.map((item) => {
//           return {
//             id: item.id,
//             title: item.title,
//             price: item.price,
//             image: item.image,
//             category: item.category,
//             quantity: 0, // Añade una propiedad de cantidad para la funcionalidad del carrito
//           };
//         });

//         setProductos(productosProcesados);
//       } catch (error) {
//         console.error('Error al obtener datos:', error);
//       }
//     };

//     obtenerDatos();
//   }, []);

//   const value = {
//     productos,
//     setProductos, // Proporciona métodos para actualizar productos
//   };

//   return (
//     <DataContext.Provider value={value}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export default DataProvider;