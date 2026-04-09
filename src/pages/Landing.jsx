import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div style={{height:'100vh',backgroundImage:'url(https://images.unsplash.com/photo-1501004318641-b39e6451bec6)',backgroundSize:'cover',color:'white',textAlign:'center'}}>
      <h1>Paradise Nursery</h1>
      <p>We bring nature closer to your home with beautiful indoor plants.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  )
}