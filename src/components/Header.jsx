import React from "react";
import Logo from "../image/logo.jpg";

function Header() {
    return <>
    <div className="navbar">
        <img src={Logo} alt="stock-logo" className="img"/>
        <div className="navbar__title">Grow Your Company</div>
    </div>
    </>
}

export default Header;