import { useState } from "react";
import "./Header.css"

const Header = ()=>{
const [isResponsive , setIsResponsive] = useState(false);

const responsiveNavbar = ()=>{
    setIsResponsive(true)
}
const responsiveNavbarClose = ()=>{
    setIsResponsive(false)
}

    return (
        <>
        <nav className="navbar" style={{display: isResponsive ? 'none': 'flex'}}>
        <img className="logo" src="asest/images/logo.png" alt="" />
        <div className="link">
        <a>Home</a>
        <a>About Us</a>
        <a>Contact Us</a>
        <a>Projects</a>
        <i className="fa fa-bars" onClick={responsiveNavbar}></i>
        </div>
        </nav>
        {/* responsive Navbar */}
        <nav className="res-navbar" style={{display: isResponsive ? 'flex': 'none'}}>
        <div className="logo-icon">
        <img className="logo" src="asest/images/logo.png" alt="" />
        <i className="fa fa-close" onClick={responsiveNavbarClose}></i>
        </div>
        <div className="link-list">
        <a>Home</a>
        <a>About Us</a>
        <a>Contact Us</a>
        <a>Projects</a>
        </div>
        </nav>
        </>
    )
}
export default Header;