import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className='w-full p-2 font-semibold text-center text-white bg-black border-t border-t-sageGreen'>
            &copy; {date} | <span className=' text-royalYellow'>Company Name</span>
        </div>
    )
}

export default Footer