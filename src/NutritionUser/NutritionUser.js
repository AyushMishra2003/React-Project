import React, { useState } from 'react'
import NutritionLink from '../NutritionLink/NutritionLink'

const NutritionUser = () => {
  const [text,setText]=useState('')
  const [isClick,setClick]=useState(false)

  function Clicking(){
    setClick(true)
    console.log("ayush");
  }  

  return (
    <div className='flex flex-col items-center justify-center gap-2'> 
       <textarea placeholder='Enter text' className='border border-black p-[2rem] ' onChange={(e)=>setText(e.target.value)} value={text} ></textarea>
       <button className='p-[1rem] border border-black' onClick={()=>{
        Clicking()
       }}>GO</button>
       {/* <p>{text}</p> */} 
         {isClick && <NutritionLink data={text}/>}
    
    </div>
  )
}
  
export default NutritionUser
