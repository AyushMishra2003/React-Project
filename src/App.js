import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nutrion_user from './Nutrion_user/Nutrion_user'
// import Home from './Home/Home'
// import NutrionCart from './NutrionCart/NutrionCart'

const App = () => {
  return (
    <div>
       <Routes>
          <Route path='/' element={<Nutrion_user/>}></Route>

       </Routes>
    </div>
  )
}

export default App