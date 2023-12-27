import { useEffect, useState } from "react"
import obtenerProductos from "../utilities/data"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const {id} = useParams()
  console.log({id})
  useEffect(()=>{
    obtenerProductos
      .then((respuesta)=> {
        const productoEncontrado = respuesta.find( (productos)=> productos.id === id)
        setProducto(productoEncontrado)
      })
      .catch((err)=>{
        console.log(err)
      })

  },[id])

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  )
}
export  {ItemDetailContainer}