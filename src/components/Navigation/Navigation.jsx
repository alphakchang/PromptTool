import React from 'react';
import logo from './alpha_logo.png';
import './Navigation.css';

const Navigation = () => {
    return(
        <nav className="navbar navbar-expand bg-body-tertiary">
            <div className="container-fluid">
                <a href="https://alphacrc.com/">
                    <span className="m-3">
                        <img src={logo} height="50px" width="50px" alt="logo" />
                    </span>
                </a>
                <span className="fw-bold text-secondary">
                    Alpha CRC Prompt Tool - <span className="fst-italic"> NOW POWERED BY <span className="text-info-emphasis border border-1 px-1 bg-warning">GPT-4 Turbo</span></span>
                </span>

                {/* navbar links */}
                <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="https://naga.alphacrc.com:5214" className="nav-link">AI Playground</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;