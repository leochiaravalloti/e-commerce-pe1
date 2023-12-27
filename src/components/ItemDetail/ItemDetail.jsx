import './itemDetail.scss'
const ItemDetail = ({ producto }) => {
    return (
      <div className="item-detail">
        <img className="item-detail__imagen" src={producto.imagen} alt={producto.nombre} />
        <div className="item-detail__texto">
          <h2 className="item-detail__texto__titulo">{producto.nombre}</h2>
          <p className="item-detail__texto__descp">{producto.descripcion}</p>
          <p className="item-detail__texto__precio">US${producto.precio}</p>
        </div>
      </div>
    );
  };
  export default ItemDetail;
  