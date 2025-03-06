import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import "./NavbarComponent.css"; // Add styling for navbar

const NavbarComponent = () => {

    const [active, setActive] = useState('Home');

    const navigate = useNavigate();

    const [search, setSearch] = useState('');

    const handleSearch = () => {
        if (search) {
            navigate(`/category/${search}`)
            setSearch('');
        }
    }

    return (
        <nav className='navbar'>
            <Link to="/" className="logo" onClick={() => { setActive("Home"); navigate("/") }}>Bangtan News</Link>
            <div className='nav-links'>
                <Link to="/" className={active === 'Home' ? 'active' : ''} onClick={() => { setActive("Home"); navigate("/") }}>Home</Link>
                <Link to="/category/General" className={active === 'General' ? 'active' : ''} onClick={() => { setActive("General"); navigate("/category/General") }}>General</Link>
                <Link to="/category/Technology" className={active === 'Technology' ? 'active' : ''} onClick={() => { setActive("Technology"); navigate("/category/Technology") }}>Technology</Link>
                <Link to="/category/Politics" className={active === 'Politics' ? 'active' : ''} onClick={() => { setActive("Politics"); navigate('/category/Politics') }}>Politics</Link>
                <Link to="/category/Health" className={active === 'Health' ? 'active' : ''} onClick={() => { setActive("Health"); navigate("/category/Health") }}>Health</Link>
                <Link to="/category/Art-Culture" className={active === 'Art & Culture' ? 'active' : ''} onClick={() => { setActive("Art & Culture"); navigate("/category/art&culture") }}>Art & Culture</Link>
            </div>
            <div className="navbar__search">
                <input className='search-input' type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} value={search} />
                <IoSearch className='search-icon' onClick={() => handleSearch()} />
            </div>
            <DarkModeToggle />
        </nav>
    )
}

export default NavbarComponent