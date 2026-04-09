import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Products from './pages/Products'
import Cart from './pages/Cart'

export default function App() {
  return (
    <Routes>
  <Route path="/plant_project/" element={<Landing />} />
  <Route path="/plant_project/products" element={<Products />} />
  <Route path="/plant_project/cart" element={<Cart />} />
</Routes>
  )
}