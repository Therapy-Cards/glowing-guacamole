import React from "react";
import {Link} from 'react-router-dom'


const Navbar = (props) => {
    return(
        <div>
            <nav>
                <img src="../herbal.png" alt="logo" />
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/LoginForm'>Login</Link>
                <Link to="/SignUpForm">Sign Up</Link>
            </nav>
        </div>
    )
}

export default Navbar