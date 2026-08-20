import React from 'react'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <div>
      <Navbar title={'Hola mundo'}/>
      <div className=''>App {1 + 1}</div>
    </div>
  )
}

export default App