import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p>&copy; 2025 TextUtils. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="social-links">
              <a href="https://github.com/codewith-shivank" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <FaGithub size={24} />
              </a>
              <a href="https://instagram.com/codewith_shivank" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com/in/shivank-maurya-21257a303" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaLinkedin size={24} />
              </a>
            </div>
            <p className="mt-2 mb-0">Contact: codewithshivank@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
