import React from 'react'
import { FiEdit2, FiDownload, FiRotateCcw, FiType } from 'react-icons/fi'
import './About.css'  // Add this line at the top

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    }

    return (
        <div className='container'>
            <h1 className="mb-4" style={myStyle}>About TextUtils</h1>
            <div className="row">
                <div className="col-md-12">
                    <div className="stats-card">
                        <h2 style={myStyle}>Features</h2>
                        <div className="row g-4 mt-2">
                            <div className="col-md-6 col-lg-3">
                                <div className="feature-card p-4 text-center" style={myStyle}>
                                    <FiType className="feature-icon mb-3" size={24} />
                                    <h4>Text Transformation</h4>
                                    <p>Convert text to uppercase, lowercase, or capitalize sentences with a single click.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="feature-card p-4 text-center" style={myStyle}>
                                    <FiEdit2 className="feature-icon mb-3" size={24} />
                                    <h4>Text Cleanup</h4>
                                    <p>Remove extra spaces and format your text for cleaner appearance.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="feature-card p-4 text-center" style={myStyle}>
                                    <FiDownload className="feature-icon mb-3" size={24} />
                                    <h4>Export Options</h4>
                                    <p>Download your processed text or copy it to clipboard instantly.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="feature-card p-4 text-center" style={myStyle}>
                                    <FiRotateCcw className="feature-icon mb-3" size={24} />
                                    <h4>History Control</h4>
                                    <p>Undo changes and track your text modifications with ease.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="stats-card mt-4">
                <h2 style={myStyle}>Why Choose TextUtils?</h2>
                <div className="mt-3">
                    <ul className="list-unstyled">
                        <li className="mb-3" style={myStyle}>
                            <h5>🚀 Fast & Efficient</h5>
                            <p>Process your text instantly with real-time updates and statistics.</p>
                        </li>
                        <li className="mb-3" style={myStyle}>
                            <h5>🎨 Modern Interface</h5>
                            <p>Clean and intuitive design with dark mode support for comfortable usage.</p>
                        </li>
                        <li className="mb-3" style={myStyle}>
                            <h5>📱 Responsive Design</h5>
                            <p>Works perfectly on all devices - desktop, tablet, and mobile.</p>
                        </li>
                        <li className="mb-3" style={myStyle}>
                            <h5>🔒 Privacy First</h5>
                            <p>All text processing happens locally in your browser - no data is sent to servers.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
