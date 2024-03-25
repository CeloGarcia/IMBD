import React from 'react';
import Logo from '../../assets/images/logo.svg';
import MenuItem from './MenuItem/MenuItem';
import './Menu.css';

function Menu() {
  return (
    <header>
        <div className="menu-container container">
            <MenuItem>
                <img src={Logo} alt="" />
            </MenuItem>
            <MenuItem>
                <nav aria-label='primary'>
                    <ul>
                        <li>Movies</li>
                        <li>TV Shows</li>
                        <li>Celebs</li>
                        <li>Watch</li>
                        <li>Awards</li>
                        <li>Community</li>
                    </ul>
                </nav>
            </MenuItem>
            <MenuItem>
                SEARCHBAR
            </MenuItem>
            <MenuItem>
                <nav aria-label='secondary'>
                    <ul>
                        <li>Watchlist</li>
                        <li>User</li>
                        <li>EN</li>
                        <li>sunIcon</li>
                    </ul>
                </nav>
            </MenuItem>
        </div>
    </header>
  )
}

export default Menu