import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const CartWidget = () => {
    const { cart, totalCantidad } = useContext(CartContext)

    return(
    <Link to="/carrito" id="cartwidget">
        <img src="/img/cartwidget.png" alt="Icono del carrito" />
        { cart.length !== 0 && <p>{totalCantidad()}</p> }
    </Link>
    )
}

export {CartWidget}
