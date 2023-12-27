import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer' //BY ME
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={  <ItemListContainer/> } />
          <Route path="/categorias/:categorias" element={<ItemListContainer/>} />
          <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
