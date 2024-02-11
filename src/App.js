import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NutritionUser from './NutritionUser/NutritionUser'
const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<NutritionUser/>}/>
      </Routes>
    </div>
  )
}

export default App
