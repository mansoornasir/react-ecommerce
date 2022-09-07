import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <Link to="/product/1">Oven</Link>
        <Link to="/product/120">Microwave</Link>
        <Link to="/product/900">Machas</Link>
    </div>
  )
}

export default Home