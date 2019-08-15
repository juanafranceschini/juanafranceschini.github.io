import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header class="app-header">
            <h3 id="app-logo">Juana Franceschini</h3>
            <nav class="app-menu">
            <ol>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
            </ol>
            </nav>
        </header>
    );
}

export default Header;