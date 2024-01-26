import { useState} from "react";

import './itemCount.scss'

const ItemCount = ({ stock, agregarAlCarrito }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="item-count__control">
        <button onClick={restar}>-</button>
        <p>{contador}</p>
        <button onClick={sumar}>+</button>
      </div>
      <div className='item-count__add-cart'>
        <button  onClick={() => agregarAlCarrito(contador)}>
            Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
