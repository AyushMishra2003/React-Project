import React, { useEffect, useState } from 'react'
const NutritionDesign = ({obj,id,color}) => {
  const st='000000'
  // const [color,setColor]=useState('000'
  console.log(color);
  // useEffect(()=>{
      // Ayush()
  // },[])

  return (
    <div className=' flex gap-[1.5rem] items-center justify-between w-[20rem] border-2  border-t-slate-300'>
       <p className='font-bold  w-[7rem]'>{obj[id].label}</p>
        <p className='w-[7rem]'>{`${obj.next.quantity.toFixed(2)}${obj.next.unit}`}</p>
        <p className='w-[7rem]'>{`${obj[id].quantity.toFixed(2)}${obj[id].unit}`}</p>
     </div> 
  )
}

export default NutritionDesign
 