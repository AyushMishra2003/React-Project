import React from 'react'

const NutritionCalDesign = ({cal}) => {
  return (
    <div className='flex-col '>
        <h1 className='font-bold text-center text-[2rem]'>Nutrition Facts</h1>
        <div className='w-[20rem] justify-between gap-2 '>
           <p className='font-bold'>Amount Per Saving</p>
             <div className='flex  gap-[11rem] '>
                  <p className='font-bold'>Calories</p>
                  <p>{cal}</p>
             </div>
        </div>
    </div>
  )
}

export default NutritionCalDesign
