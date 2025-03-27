import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import { FiMoon, FiSun } from 'react-icons/fi';

export default function Navbar(props) {
    const location = useLocation();

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} sticky-top`}>
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">
                    {props.title}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active-nav-link" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active-nav-link" : ""}`} to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <button 
                            onClick={props.toggleMode} 
                            className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} btn-sm d-flex align-items-center gap-2`}
                        >
                            {props.mode === 'light' ? <FiMoon /> : <FiSun />}
                            {props.mode === 'light' ? 'Dark' : 'Light'} Mode
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'TextUtils',
    aboutText: 'About'
};