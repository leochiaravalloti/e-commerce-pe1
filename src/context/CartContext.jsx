import { createContext, useState } from "react";
const CartContext = createContext()

const CartProvider = ( {children} ) =>{
  const [cart, setCart] = useState([])

  const añadirProducto = (producto) =>{
    const condicion = estaEnElCart(producto.id)
    if(condicion){
      const productosModificados = cart.map((productoCart)=> {
        if(productoCart.id === producto.id){
          return {...productoCart, cantidad: productoCart.cantidad + producto.cantidad }
        }else{
          return productoCart
        }
      })

      setCart(productosModificados)
    }else{
      setCart([...cart, producto])
    }
  }

  const estaEnElCart = (idProducto) =>{
    return cart.some((producto)=> producto.id === idProducto )
  }

  const totalCantidad = () =>{
    return cart.reduce((total, producto)=> total + producto.cantidad , 0)
  }

  const totalPrecio = () => {
    return cart.reduce((total, producto)=> total + (producto.cantidad * producto.precio ), 0)
  }

  const borrarCart = () =>{
    setCart([])
  }

  const borrarProducto = (idProducto) =>{
    const productosFiltrados = cart.filter((producto) => producto.id !== idProducto)
    setCart(productosFiltrados)
  }

  return(
    <CartContext.Provider value={{cart, añadirProducto, totalCantidad, borrarCart, borrarProducto, totalPrecio}}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }