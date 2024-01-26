import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import './cart.scss'

const Cart = () => {
  const { cart, borrarCart, borrarProducto, totalPrecio } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-vacio">
        <h2>Hasta el momomento no has adicionado ningún elemento al carrito.</h2>
        <div> <Link to="/">Volver al inicio</Link> </div> 
      </div>
    );
  }

  return (
    <div className="cart">
      <ul className="cart__ul">
        {cart.map((producto) => (
          <li
            key={producto.id} className="cart__ul__li"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}            />
            <div>
              <h4>{producto.nombre}</h4>
              <p>Cantidad: {producto.cantidad}</p>
              <button onClick={() => borrarProducto(producto.id)}>
                Eliminar producto
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h3>PRECIO TOTAL: US${totalPrecio()}</h3>
      <button className="cart__borrar-cart"onClick={borrarCart}>Eliminar Cart</button>
    </div>
  );
};
export default Cart;
