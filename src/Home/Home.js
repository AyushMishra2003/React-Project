import React from 'react'
import Header from '../Header/Header'
import NutritionUser from '../NutritionUser/NutritionUser'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div className='flex flex-col justify-between h-[100vh] w-[100vw]'>
      <Header/>
      <NutritionUser/>
      <Footer/>
    </div>
  )
}

export default Home
