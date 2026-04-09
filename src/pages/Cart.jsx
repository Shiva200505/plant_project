import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease, remove } from '../redux/cartSlice'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { items } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const totalItems = items.reduce((sum,i)=>sum+i.quantity,0)
  const totalCost = items.reduce((sum,i)=>sum+i.quantity*i.price,0)

  return (
    <div>
      <Header />
      <h2>Total Items: {totalItems}</h2>
      <h2>Total Cost: ${totalCost}</h2>

      {items.map(i => (
        <div key={i.id}>
          <h3>{i.name}</h3>
          <p>${i.price}</p>
          <button onClick={()=>dispatch(increase(i.id))}>+</button>
          <span>{i.quantity}</span>
          <button onClick={()=>dispatch(decrease(i.id))}>-</button>
          <button onClick={()=>dispatch(remove(i.id))}>Delete</button>
        </div>
      ))}

      <Link to="/plant_project/products"><button>Continue Shopping</button></Link>
      <button onClick={()=>alert('Coming Soon')}>Checkout</button>
    </div>
  )
}