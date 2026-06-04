// import React from "react";
// import { Link } from "react-router-dom";
// const Navbar = ()=>{
//     return(
//         <>
//         <ul>
//             <li><Link to='/'>Home</Link></li>
//             <li><Link to='/about'>About</Link></li>
//             <li><Link to='/contact'>Contact</Link></li>
//             <li><Link to='/signup'>Signup</Link></li>
//             <li><Link to='/login'>Login</Link></li>
//         </ul>
//         </>
//     )
// }
// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MySite</div>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link to="/signup" onClick={() => setOpen(false)}>Signup</Link>
        <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;