import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const [barActive, setBarActive] = useState(true)
    const hamActive = () => {
        barActive ? setBarActive(false) : setBarActive(true)
    }
    const useHeaderList = [{ "url": "https://www.google.com", "list": "Home" },
    { url: "/", "list": "Contact" },
    { url: "/", "list": "About" }]
    return (
        <header className='flex w-full justify-between  md:pl-14 md:p r-6 lg:pl-16 lg:pr-8 lg:p-3 bg-darkBg text-white items-center  z-[100] py-[10px] px-6 shadow-[-1px_1px_7px_#000] fixed top-0 left-0 bg-black'>
            <div className=' w-[2rem] h-[2rem] flex items-center justify-center md:hidden cursor-pointer text-[#bd4aff]' onClick={hamActive}>
                {barActive ? <FontAwesomeIcon icon={faBars} className='text-[1.3rem]' />
                    : <FontAwesomeIcon icon={faXmark} className='text-[1.6rem]' />}
            </div>
            <div className='md:mr-6 lg:mr-10'>LOGO</div>
            <nav className={`bg-black text-white md:border-0 shadow-[0px_160px_1000px_#12073ac5] md:shadow-none flex border-t-[#201154] border-t-2  p-4 pb-10 md:p-0 w-screen md:max-w-[80vw]  items-center justify-between gap-3 md:gap-0 flex-col absolute 
            ${barActive ? "top-[2.95rem] left-[-60rem] duration-[0.5s]" : "top-[2.85rem] left-0 duration-[0.5s]"}
             md:flex-row md:static `}>
                <div className="flex flex-col gap-3 md:flex-row md:gap-0 ">
                    {useHeaderList.map((val) => {
                        return (
                            <NavLink key={val.list} style={({ isActive }) => ({
                                color: isActive ? '#c35dfe' : 'white'
                            })} to={val.url} end>
                                <div className='text-[1.05rem] 
                            tracking-wide 
                            w-[90vw] md:w-fit text-center md:border-0
                            md:hover:border-b-2
                            pb-4 pt-1 md:p-[3px_7px] md:m-[0px_6px]
                            lg:p-[3px_9px] lg:m-[0px_11px]
                             border-grey hover:border-[#bd4aff] hover:text-[#c35dfe]
                             duration-200 cursor-pointer 
                             border-b-[1px]'>
                                    {val.list}
                                </div >
                            </NavLink>
                        )
                    })}
                </div>
            </nav>
        </header>
    )  
}

export default Header
