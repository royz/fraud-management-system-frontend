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

  .pending-users {
    padding: 0 20px;
    display: flex;
    flex-direction: column;

    .pending-user {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid gray;
      padding: 20px 15px;

      button {
        margin: 0 10px;
      }
    }
  }
  
  .no-pending {
    text-align: center;
    margin: 50px 0;
  }
`

const AcceptDecline = props => {
  const [pending, setPending] = useState([])
  const [updateRequired, setUpdateRequired] = useState(true)

  useEffect(() => {
    if (updateRequired) {
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/users/pending`,
        headers: {}
      })
        .then(function (response) {
          setPending(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });

      setUpdateRequired(false)
    }
  }, [updateRequired])

  const changeStatus = async (userId, state) => {
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/changeAuthStatus?userId=${userId}&isAuthorized=${state}`,
      headers: {}
    })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        switch (state) {
          case 1:
            toast('approved request')
            break
          case 2:
            toast('rejected request')
            break
        }
        setUpdateRequired(true)
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return <Div className="card">
    <h4>Approve or Reject Requests</h4>
    {pending.length >
    0 ? <div className="pending-users">
      {pending.map(user => <div className="pending-user">
        <div>{user.email}</div>
        <div>
          <button className="btn btn-success" onClick={() => changeStatus(user.userId, 1)}>Approve</button>
          <button className="btn btn-danger" onClick={() => changeStatus(user.userId, 2)}>Reject</button>
        </div>
      </div>)}
    </div>
    : <p className='no-pending'>Currently there are no pending requests</p>
    }
  </Div>
}

export default AcceptDecline;
