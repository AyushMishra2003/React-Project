import React, { useState } from 'react'
import NutritionLink from '../NutritionLink/NutritionLink'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const NutritionUser = () => {
  const [text,setText]=useState('')
  const [isClick,setClick]=useState(false)

  function Clicking(){
    setClick(true)
    console.log("ayush");
  }  

  return (
    <div>
    <div className='flex flex-col items-center justify-center gap-2 mt-[5rem]'> 
       <textarea placeholder='Enter text' className='border border-black p-[0.5rem] rounded-lg' onChange={(e)=>setText(e.target.value)} value={text} > </textarea>
       <button className='px-[4rem] p-[0.3rem] rounded-[3rem] bg-red-900 border-none bg-gradient-to-r from-red-600 to-purple-500  text-white' onClick={()=>{  
        Clicking()
       }}>GO </button>
       {/* <p>{text}</p> */} 
         {isClick && <NutritionLink data={text}/>}
    
    </div>
    </div>
  )
}
  
export default NutritionUser
