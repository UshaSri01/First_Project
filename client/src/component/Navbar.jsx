import React from 'react'
import logo from '../Assest/Logoo.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"> 
                 <div className='d-flex align-items-center'>
                    <img src={logo} alt="" width={60}/>
                    <h4 className='mt-1'>Media Library</h4>
                 </div>
                </a>
            </nav>
        </div>
    )
}

export default Navbar