import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import NutritionUser from './NutritionUser/NutritionUser'
import Home from './Home/Home'
import FoodDatabase from './FoodDatabase/FoodDatabase'
const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/FoodDatabase/' element={<FoodDatabase/>}/>
        <Route  path='/Recipe/' element={<FoodDatabase/>}/>
      </Routes>
    </div>
  )
}

export default App
