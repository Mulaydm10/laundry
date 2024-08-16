import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const navigate = useNavigate();

  const handleLogoClick = () => {
    // You can add more logic here if needed
    navigate('/');
  };
      
    return(
        <nav>
            <img src="/images/logo.png" onClick={handleLogoClick} className="nav--logo"alt="" />
            
            <div className="nav--links">
                <Link to="/login">Login</Link> / <Link to="/signup">Sign Up</Link>
            </div>
            
        </nav>
    );
};