import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/home' element={<HomeScreen/>}/>
    </Routes>
  )
}

export default App