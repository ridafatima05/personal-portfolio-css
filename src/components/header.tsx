import Link from "next/link";
import "../style/header.css";

import React from 'react'

const Header = () => {
  return (
    <div className="header">
     {/* left side */}
     <div>
        <h1 className="logo">RF</h1>
        </div>

     {/*right side  */}
     <div className="header-rightside-div">
        <ul className="header-links">
            <li>
                <Link className="navbar-links" href={"/"}>Home</Link>
            </li>
            <li>
                <Link className="navbar-links" href={"/about"}>About</Link>
            </li>
            <li>
                <Link className="navbar-links" href={"/contact"}>Contact</Link>
            </li>
        
        </ul>
     </div>
    </div>
  )
}

export default Header
