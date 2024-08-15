import React from "react";
import { Link } from 'react-router-dom';

export default function Nav() {
    return(
        <nav>
            <img src="/images/logo.png" className="nav--logo"alt="" />
            <div className="nav--links">
                <Link to="/login">Login</Link> / <Link to="/signup">Sign Up</Link>
            </div>
            
        </nav>
    )
}