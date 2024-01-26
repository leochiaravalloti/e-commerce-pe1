import { useEffect, useState } from "react";

import obtenerProductos from "../utilities/data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const {categorias} = useParams()
  useEffect(() => {
    obtenerProductos
      .then((respuesta) => {
          if (categorias) {
            const prodFiltrados = respuesta.filter((producto)=> producto.categoria === categorias)
            setProductos(prodFiltrados);
          }
          else{setProductos(respuesta);
          }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('Finalizó la promesa.');
      });
  }, [categorias]);

  return (
        <div className="item-list-container">
          <ItemList productos={productos} />
        </div>
  );
};

export default ItemListContainer;