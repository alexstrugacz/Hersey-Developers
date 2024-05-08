import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header style={{ zIndex: 10, backgroundColor: "rgb(0, 0, 0)" }} className='fixed w-full text-white pt-2 mb-2'>
            <div className="flex w-full justify-between items-center p-5">
                <Link to="/d214" className="font-bold text-white text-2xl flex items-center gap-1"><img src="https://www.d214.org/cms/lib/IL50000680/Centricity/Template/20/district-logo-icon.png" style={{ width: "30px" }} alt="image" /> D214 <span style={{ color: "#c00c2c" }}>Developers</span></Link>
            </div>
        </header>
    )
}

export default Header  