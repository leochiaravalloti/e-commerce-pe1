import { useState, useContext } from 'react';

import { CartContext } from '../../context/CartContext';
import {Link} from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';

import './itemDetail.scss'

const ItemDetail = ({ producto }) => {
  const [toggle, setToggle] = useState(false);
  const { añadirProducto } = useContext(CartContext)

  const agregarAlCarrito = (contador) => {
    const productoNuevo = {...producto, cantidad: contador }
    añadirProducto(productoNuevo)
    setToggle(true);
  };
    return (
      <div className="item-detail">
        <img className="item-detail__imagen" src={producto.imagen} alt={producto.nombre} />
        <div className="item-detail__texto">
          <h2 className="item-detail__texto__titulo">{producto.nombre}</h2>
          <p className="item-detail__texto__descp">{producto.descripcion}</p>
          <p className="item-detail__texto__precio">US${producto.precio}</p>
          {toggle ? (
          <>
            <Link className="button-terminar" to="/carrito">
              Terminar mi compra
            </Link>
            <Link className="button-terminar" to="/">
              Seguir comprando
            </Link>
          </>
        ) : (
          <ItemCount
            stock={producto.stock}
            agregarAlCarrito={agregarAlCarrito}
          />
        )}
        </div>
      </div>
    );
  };
  export default ItemDetail;
  