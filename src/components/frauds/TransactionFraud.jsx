import React, {useEffect, useState} from 'react';
import Styled from "./frauds.styles";

const TransactionFraud = props => {
  const [frauds, setFrauds] = useState([])

  useEffect(() => {
    let newFrauds = [{
      transactionNo: '43253640230',
      cardHolder: 'Piyush Kumar',
      attempts: 4,
      fraudLevel: 3,
      date: '11/03/2021'
    }, {
      transactionNo: '5433640230',
      cardHolder: 'Rajesh Goyel',
      attempts: 4,
      fraudLevel: 5,
      date: '21/07/2020'
    }, {
      transactionNo: '45640230',
      cardHolder: 'Sukumar Das',
      attempts: 7,
      fraudLevel: 3,
      date: '11/03/2021'
    }, {
      transactionNo: '923640230',
      cardHolder: 'Jaydev Kar',
      attempts: 2,
      fraudLevel: 5,
      date: '13/02/2009'
    }]

    setFrauds(newFrauds)
  }, [])


  return <Styled>
    <h4>Transaction Frauds</h4>
    <table className="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Transaction No.</th>
        <th scope="col">Card Holder</th>
        <th scope="col">Attempts</th>
        <th scope="col">Level</th>
        <th scope="col">Transaction Date</th>
        <th scope="col">Options</th>
      </tr>
      </thead>
      <tbody>
      {frauds.map((fraud, index) => <tr>
        <th scope="row">{index + 1}</th>
        <td>{fraud.transactionNo}</td>
        <td>{fraud.cardHolder}</td>
        <td>{fraud.attempts}</td>
        <td>{fraud.fraudLevel}</td>
        <td>{fraud.date}</td>
        <td>
          <button className='option-btn view btn btn-outline-success'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye"
                 viewBox="0 0 16 16">
              <path
                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
            </svg>
          </button>
          <button className='option-btn btn btn-outline-primary edit'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-pencil-square" viewBox="0 0 16 16">
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
          </button>
          <button className='option-btn delete btn btn-outline-danger'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash"
                 viewBox="0 0 16 16">
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </button>
        </td>
      </tr>)}
      </tbody>
    </table>
  </Styled>
}

export default TransactionFraud;
