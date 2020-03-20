import React from "react";
import {Link} from 'react-router-dom'
import herbal from '../herbal.png'

const Navbar = (props) => {
    return(
        <div className='Nav'>
            <nav>
                <img src={herbal} alt="logo" />
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/LoginForm'>Login</Link>
                <Link to="/SignUpForm">Sign Up</Link>
            </nav>
        </div>
    )
}

export default Navbar