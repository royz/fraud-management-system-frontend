import React from 'react';
import styled from 'styled-components'

const Footer = props => {
  const Div = styled.div`
    background: #212529;
    text-align: center;
    color: #aaaaaa;
    font-size: 0.8rem;
  `

  return <Div id="footer">
    © {(new Date()).getFullYear()} Copyright: FraudAnalyzer.com
  </Div>
}

export default Footer;
