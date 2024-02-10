import React, { useState } from 'react'
import NutrionCart from '../NutrionCart/NutrionCart'

const Nutrion_user = () => {
    const  [text,setText]=useState('')

  return (
    <div className='flex flex-col items-center justify-center gap-1'>
        <textarea placeholder='Enter text' className='border  border-black w-[20rem] h-[10rem] ' onChange={(e)=>setText(e.target.value)} value={text}></textarea>
        {/* <button className='border border-black p-[1rem]'>GO</button> */}
        <NutrionCart data={text}/>
    </div>
  )
}

export default Nutrion_user
