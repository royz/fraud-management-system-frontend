import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import {toast} from "react-toastify";

const Div = styled.div`
  margin-top: 30px;

  h4 {
    text-align: center;
    margin: 25px 0;
  }

  .high-risk {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid gray;
  }

  .no-pending {
    text-align: center;
    margin: 20px 0 60px 0;
  }
`


const BlockFrauds = props => {
  const [frauds, setFrauds] = useState([])
  const [updateReq, setUpdateReq] = useState(true)

  useEffect(() => {
    if (updateReq) {
      axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/frauds/card/all`,
        headers: {}
      })
        .then(function (response) {
          const newFrauds = [];
          response.data.forEach(fraud => {
            if (!fraud.blocked && fraud.fraudLevel >= 5) {
              newFrauds.push(fraud)
            }
          })
          setFrauds(newFrauds)
        })
        .catch(function (error) {
          console.log(error);
        });
      setUpdateReq(false)
    }
  }, [updateReq])

  const block = async (accNo) => {

    var config = {
      method: 'put',
      url: `${process.env.REACT_APP_API_URL}/frauds/card/block?accNo=${accNo}&isBlocked=true`,
      headers: {}
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        toast('card is blocked')
      })
      .catch(function (error) {
        console.log(error);
        toast.error('could not block card')
      });
    setUpdateReq(true)
  }

  return <Div className="card">
    <h4>High Risk Frauds</h4>
    {frauds.length > 0
      ? <div className="high-risks">
        {frauds.map(fraud => <div className="high-risk">
          <p>Card Holder: {fraud.cardHolderName}, Fraud Level: {fraud.fraudLevel}</p>
          <button className="btn btn-danger" onClick={()=> block(fraud.accNo)}>Block</button>
        </div>)}
      </div>
      : <p className="no-pending">There are no high risk frauds</p>
    }
  </Div>
}

export default BlockFrauds;
