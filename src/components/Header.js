import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="images/logo.jpg" alt="Bookshop Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="user-interface">
                <a href="#">Profile</a>
                <a href="#">Cart</a>
            </div>
        </header>
    );
};

export default Header;
