import React from 'react';
import './Header.css';
import Secondnav from './secondnav/Secondnav';
import { HiSearch } from "react-icons/hi";
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [isShowSecondnav, setIsShowSecondnav] = useState(false);
    const [activeNav, setActiveNav] = useState(-1);
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const homeHandler = () => {
        navigate("/")
    };

    const loginHandler = () => {
        navigate("/login")
    };

    const logoutHandler = () => {
        localStorage.setItem("isLoggedIn", "false")
        navigate("/login")
    };

    const handleMouseEnter = (activeNavIndex) => {
        setIsShowSecondnav(true);
        setActiveNav(activeNavIndex);
    };

    const handleMouseLeave = () => {
        setIsShowSecondnav(false);
        setActiveNav(-1);
    };

    return ( 
       <nav class="header" onMouseLeave={handleMouseLeave}>
       <div class="nav_items">
            <Link to="/fitness" style={{ textDecoration: 'none' }}><a class="nav_item fitness">Fitness</a></Link>
            <Link to="/hobbies" style={{ textDecoration: 'none' }}><a class="nav_item hobbies">Hobbies</a></Link>
            <Link to="/travel" style={{ textDecoration: 'none' }}><a class="nav_item travel">Travel</a></Link>
            <Link to="/food" style={{ textDecoration: 'none' }}><a class="nav_item food">Food</a></Link>
        </div>
        <Link to="/" style={{ textDecoration: 'none' }}><div class="logo">Home</div></Link>
        <div class="nav_items">
            <Link to="/family" style={{ textDecoration: 'none' }}><a class="nav_item family">Family</a></Link>
            <Link to="/about" style={{ textDecoration: 'none' }}><a class="nav_item about">About</a></Link>
            <Link to="/" style={{ textDecoration: 'none' }}><a class="nav_item search"><HiSearch size='1rem' color='' /></a></Link>
            <Link to="/login" style={{ textDecoration: 'none' }}><a class="nav_item Login">Login</a></Link>
        </div>
        {isLoggedIn === "true" ?
            <div className="logout_button"><a onClick={logoutHandler} onMouseEnter={() => handleMouseEnter(-1)}></a></div>
        :
            <div className="login_button"><a onClick={loginHandler} onMouseEnter={() => handleMouseEnter(-1)}></a></div>
        } 
        </nav>
    );
}
