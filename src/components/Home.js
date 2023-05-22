import React from 'react'
import { Link } from 'react-router-dom'
import BurgerArkaPlan from '../assets/tamburger.jpeg'
import '../styles/Home.css'

export const Home = () => {
  return (
    <div className='mainPage' style={{ bakcgroundImage: `url(${BurgerArkaPlan})` }}>
      <div className='order'>
        <Link to="/menu">
          <button>Sipariş ver</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
