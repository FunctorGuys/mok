import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact">
      <p>
        Copyright &nbsp;&nbsp;&nbsp; &copy; &nbsp;&nbsp;&nbsp; 2019 M.O.K. Inc
      </p>
      <div className="links">
        <Link to="/policy">תקנון האתר ותנאי שימוש</Link>
      </div>
      <div className="links">
        <Link to="/contact">צור קשר</Link>
      </div>
    </footer>
  );
};

export default Footer;
