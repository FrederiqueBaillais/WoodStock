import React from 'react';
import header_small from '../images/header_small.png';

const Header = () => {
    return <header>
        <div className="header_left">
            <svg className="menu_svg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 384 384" style="enable-background:new 0 0 384 384;" xml:space="preserve">
            <g><g><g>
                <rect x="0" y="277.333" width="384" height="42.667"/>
                <rect x="0" y="170.667" width="384" height="42.667"/>
                <rect x="0" y="64" width="384" height="42.667"/>
            </g></g></g>
            </svg>
        </div>
        <div className="header_nav">
            <span className="logo">W O O D</span>
            <a href="#">About</a>
            <a href="#">Furnitures</a>
            <a href="#">Shop</a>
            <a href="#">Contact</a>
        </div>
    </header>;
};

export default Header;