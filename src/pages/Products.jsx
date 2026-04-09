import Header from '../components/Header'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

const plants = [
  { id:1,name:'Snake Plant',price:10,category:'Indoor',img:'https://via.placeholder.com/100'},
  { id:2,name:'Aloe Vera',price:8,category:'Medicinal',img:'https://via.placeholder.com/100'},
  { id:3,name:'Peace Lily',price:12,category:'Flowering',img:'https://via.placeholder.com/100'},
  { id:4,name:'Spider Plant',price:9,category:'Indoor',img:'https://via.placeholder.com/100'},
  { id:5,name:'Tulsi',price:7,category:'Medicinal',img:'https://via.placeholder.com/100'},
  { id:6,name:'Rose',price:15,category:'Flowering',img:'https://via.placeholder.com/100'}
]

export default function Products() {
  const dispatch = useDispatch()

  return (
    <div>
      <Header />
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px',padding:'20px'}}>
        {plants.map(p => (
          <div key={p.id} style={{border:'1px solid gray',padding:'10px'}}>
            <img src={p.img} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button onClick={()=>dispatch(addToCart(p))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}