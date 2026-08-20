import React from 'react'
import { Link } from 'react-router'

const HomeScreen = () => {
  return (
    <div>
        <h1>Listado de productos</h1>
        

        <Link to={'/product/new'}>Ir a creador de productos</Link>
        
    </div>
  )
}

export default HomeScreen