import {Link} from "react-router-dom"
import './item.scss'

const Item = ({ producto }) => {
    return (
      <div className="item">
        <img className="item__image" src={producto.imagen} alt={producto.nombre} />
        <p className="item__titulo"> {producto.nombre} </p>
        <p className="item__precio">US$ {producto.precio} </p>
        <Link to={`/detalle/${producto.id}`} className="item__link">Ver detalles</Link>
      </div>
    );
  };
  export default Item;
  