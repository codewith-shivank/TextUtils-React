import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="text-animation">
                <span>T</span>
                <span>e</span>
                <span>x</span>
                <span>t</span>
                <span>U</span>
                <span>t</span>
                <span>i</span>
                <span>l</span>
                <span>s</span>
            </div>
            <div className="loading-bar"></div>
        </div>
    );
};

export default Loader;