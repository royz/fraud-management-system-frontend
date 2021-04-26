import React, {useState} from 'react';
import styled from "styled-components";
import CardsFraud from "./CardsFraud";
import TransactionFraud from "./TransactionFraud";
import ClaimsFraud from "./ClaimsFraud";

const Styled = styled.div`
  li {
    cursor: pointer;
    border-bottom: 2px solid rgba(13, 110, 253, 0.2);
    
    &:nth-child(2) {
      border-right: 2px solid rgba(13, 110, 253, 0.2);
      border-left: 2px solid rgba(13, 110, 253, 0.2);
    }

    p {
      margin-bottom: 0;
    }
  }
`


const Frauds = () => {
  const [tab, setTab] = useState('card')

  return <Styled className='card'>
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <p className={`nav-link ${tab === 'card' && 'active'}`} aria-current="page"
           onClick={() => setTab('card')}>Cards</p>
      </li>
      <li className="nav-item">
        <p className={`nav-link ${tab === 'claims' && 'active'}`} aria-current="page"
           onClick={() => setTab('claims')}>Claims</p>
      </li>
      <li className="nav-item">
        <p className={`nav-link ${tab === 'transaction' && 'active'}`} aria-current="page"
           onClick={() => setTab('transaction')}>Transaction</p>
      </li>
    </ul>
    {tab === 'card' && <CardsFraud/>}
    {tab === 'claims' && <ClaimsFraud/>}
    {tab === 'transaction' && <TransactionFraud/>}
  </Styled>
}

export default Frauds;
