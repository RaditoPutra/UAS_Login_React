import { faBars, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './NavSidebar.css'; // CSS gabungan untuk Navbar dan Sidebar

const NavSidebar = ({
    sidebarOpen,
    toggleNav,
    searchQuery,
    handleSearch,
    openLogoutModal,
    }) => {
    return (
        <>
        {/* Navbar */}
        <header className="fixed-top" id="navbar">
            <nav className="container d-flex justify-content-between align-items-center py-3">
            <div className="navbar-logo d-flex align-items-center">
                <FontAwesomeIcon icon={faBars} onClick={toggleNav} className="menu-icon" />
                <img src="/assets/LogoNama.png" alt="Logo" className="logo-image" />
            </div>
            <div className="search-container d-flex align-items-center">
                <input
                type="text"
                className="search-bar"
                placeholder="Search film"
                value={searchQuery}
                onChange={handleSearch}
                />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
            </nav>
        </header>

        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
            <Link to="/home">Home</Link>
            <Link to="/profil">Profil</Link>
            <Link to="/daftar-film">Daftar Film</Link>
            <div className="sidebar-logout">
            <a href="#" onClick={openLogoutModal} className="logout-link">
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </a>
            </div>
        </div>
        <div className={`page-overlay ${sidebarOpen ? 'show' : ''}`} onClick={toggleNav}></div>
        </>
    );
};

export default NavSidebar;
