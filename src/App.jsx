import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer' //BY ME
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={  <ItemListContainer/> } />
            <Route path="/categorias/:categorias" element={<ItemListContainer/>} />
            <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
            <Route path="/carrito" element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
