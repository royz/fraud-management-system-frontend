import React from 'react';
import './Footer.css'

const Footer = props => {
  return <footer className="page-footer font-small bg-dark">
    <div className="footer-copyright text-center py-3">
      © {(new Date()).getFullYear()} Copyright: FraudAnalyzer.com
    </div>
  </footer>
}

export default Footer;
