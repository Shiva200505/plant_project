import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
  const items = useSelector(state => state.cart.items)
  const total = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <div style={{display:'flex',justifyContent:'space-between',padding:'10px',background:'#2e7d32',color:'white'}}>
      <h2>Paradise Nursery</h2>
      <div>
        <Link to="/products" style={{marginRight:'20px',color:'white'}}>Products</Link>
        <Link to="/cart" style={{color:'white'}}>Cart ({total})</Link>
      </div>
    </div>
  )
}