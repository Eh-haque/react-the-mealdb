import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h2>The Meal DB</h2>
            <nav>
                <a href="/home">Home</a>
                <a href="/food">Food</a>
                <a href="/support">Support</a>
            </nav>
        </div>
    );
};

export default Header;