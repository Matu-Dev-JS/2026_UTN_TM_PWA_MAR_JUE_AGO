import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen'
import NewProductScreen from './Screens/NewProductScreen'
import { ProductContextProvider } from './Context/ProductContext'


const App = () => {
  return (
    <ProductContextProvider>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path='/product/new' element={<NewProductScreen/>} />
      </Routes>
    </ProductContextProvider>
  )
}

export default App