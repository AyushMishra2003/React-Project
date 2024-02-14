import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import NutritionUser from './NutritionUser/NutritionUser'
import Home from './Home/Home'
const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
