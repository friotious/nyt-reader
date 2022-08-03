import React from 'react';
import './Nav.css'
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className='Nav' >
            <Link to='/' className='app-name' style={{ textDecoration: "none" }}> 
                <h1>NYT Reader</h1>
            </Link>
        </div>
    );
}

export default Nav;