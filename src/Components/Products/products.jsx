import { useEffect, useState } from "react";
import React, {useContext} from "react";
import DataContext from "../../Context/Dataprovider";
import Productoitem from "../../Components/Products/ProductoItem";
import data from "../../Data.js/";

const ProductosLista = () => {
  const [productos, setProductos] = useState([]);
  const [shorts, setShorts]= useState([]);

  useEffect(() => {
    setProductos(data.items);
    setShorts(data.shorts);
  }, []);

  // const value = useContext(DataContext);
  // const { addCarrito } = value;


  return (
    <>
      <div>
        <h1 className="titulo-prod p-5 text-center fw-bold text-decoration-underline underline-offset-8"> PRODUCTOS </h1>
      </div>
      <div className="container productos">
            {productos.map((producto) => (
              <Productoitem
                key={producto.id}
                id={producto.id}
                title={producto.title}
                price={producto.price}
                image={producto.image}
                category={producto.category}
                cantidad={producto.cantidad}
              />
            ))}
            {shorts.map((short) => (
              <Productoitem
                key={short.id}
                id={short.id}
                title={short.title}
                price={short.price}
                image={short.image}
                category={short.category}
                cantidad={short.cantidad}
              />
            ))}
      </div>
    </>
  );
};

export default ProductosLista;