/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';

export default function Navbar(props) {
    // Change isLoggedIn to true when user is logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { isDarkMode, toggleDarkMode } = props;

    // Function that return log in / log out btn depending on user's status
    function authButtons() {
        if (isLoggedIn)
            return (
                <li>
                    <button
                        type="button"
                        className="navbar_btn navbar_icon"
                        aria-label="Log Out"
                    >
                        <i className="fa-solid fa-right-from-bracket" />
                    </button>
                </li>
            );
        return (
            <li>
                <Link
                    to="/login"
                    type="button"
                    className="navbar_btn navbar_icon"
                    aria-label="Log In"
                >
                    <i className="fa-solid fa-right-to-bracket" />
                </Link>
            </li>
        );
    }

    return (
        <nav>
            <ul className="navbar">
                {/* Home Button */}
                <li>
                    <a href="/" className="navbar_icon">
                        <i className="fa-solid fa-house" />
                    </a>
                </li>

                {/* Show user icon if logged in */}
                {isLoggedIn && (
                    <li>
                        <Link
                            to="/user/settings"
                            type="button"
                            aria-label="Settings"
                            className="navbar_icon"
                        >
                            <i className="fa-solid fa-user" />
                        </Link>
                    </li>
                )}

                {/* Light/Dark Mode button */}
                <li>
                    <button
                        type="button"
                        className="navbar_btn navbar_icon"
                        onClick={toggleDarkMode}
                        aria-label={
                            isDarkMode
                                ? 'Switch to Light Mode'
                                : 'Switch to Dark Mode'
                        }
                    >
                        <i
                            className={
                                isDarkMode
                                    ? 'fa-solid fa-sun'
                                    : 'fa-solid fa-moon'
                            }
                        />
                    </button>
                </li>

                {/* Log In / Log Out button */}
                {authButtons()}
            </ul>
        </nav>
    );
}

Navbar.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
};
