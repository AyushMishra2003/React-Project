import React from 'react'

const NeutrionDesign = ({name,unitValue,perValue,unit}) => {
  return (
    <div className='flex items-center justify-center gap-[5rem]'>
       <div className='flex items-center justify-center gap-[0.3rem]'>
        <p>{name}</p>
        <p>{unitValue.toFixed(2)} {unit}</p>
       </div>
       <p>{perValue.toFixed(2)}%</p>
    </div>
  )
}

export default NeutrionDesign
