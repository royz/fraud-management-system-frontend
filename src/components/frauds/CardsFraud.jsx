import React, {useContext, useEffect, useState} from 'react';
import Styled from './frauds.styles';
import axios from "axios";
import {AuthContext} from "../../App";
import {Redirect} from "react-router-dom";
import {format, isAfter, isBefore} from "date-fns";
import {toast} from "react-toastify";

const CardsFraud = props => {
  const [frauds, setFrauds] = useState([])
  const {user} = useContext(AuthContext);
  const [selectedCard, setSelectedCard] = useState();
  const [updateRequired, setUpdateRequired] = useState(false)
  const [filter, setFilter] = useState({from: null, to: null})
  const updateFilter = (e) => {
    setFilter({...filter, [e.target.name]: e.target.value})
  }


  useEffect(() => {
    if (updateRequired) {
      axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/frauds/card/all`
      })
        .then(res => {
          setFrauds(res.data);
          setSelectedCard(res.data[0])
        })
        .catch(err => {
          console.log(err);
        });
      setUpdateRequired(false)
    }
  }, [updateRequired])

  const handleChange = event => {
    if (['expiryDate', 'dateTime'].includes(event.target.name)) {
      console.log(event.target.name, event.target.value)
      setSelectedCard({...selectedCard, [event.target.name]: new Date(event.target.value)})
    } else
      setSelectedCard({...selectedCard, [event.target.name]: event.target.value})
  }

  const toDateStr = date => {
    console.log({date})
    console.log(new Date(date))
    try {
      const formattedDate = format(new Date(date), 'yyyy-MM-dd')
      console.log('fmt:', formattedDate)
      return formattedDate
    } catch (err) {
      console.log(err.message);
      return ''
    }
  }

  const updateCard = async () => {
    const data = JSON.stringify({
      "cardNo": selectedCard.cardNo,
      "cardHolderName": selectedCard.cardHolderName,
      "accNo": selectedCard.accNo,
      "cardType": selectedCard.cardType,
      "expiryDate": selectedCard.expiryDate,
      "dateTime": selectedCard.dateTime,
      "fraudLevel": selectedCard.fraudLevel
    });
    // check if adding new card or updating existing card
    if (selectedCard.user) {
      axios({
        method: 'put',
        url: `${process.env.REACT_APP_API_URL}/frauds/card/update?id=${selectedCard.id}`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      })
        .then(function (response) {
          toast.success('updated fraud details')
          setUpdateRequired(true)
        })
        .catch(function (error) {
          toast.error('could not update fraud details')
        });
    } else {
      const config = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/frauds/card/add?user_id=${user.userId}`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios(config)
        .then(function (response) {
          toast.success('added new fraud')
          setUpdateRequired(true)
        })
        .catch(function (error) {
          toast.error('could not add new fraud')
        });
    }
  }


  const startAddCard = async () => {
    setSelectedCard({
      "cardNo": "",
      "cardHolderName": "",
      "accNo": "",
      "cardType": "",
      "expiryDate": "",
      "dateTime": "",
      "fraudLevel": ""
    })
  }


  const deleteCard = async () => {
    var data = JSON.stringify({
      "id": selectedCard.id
    });

    var config = {
      method: 'delete',
      url: `${process.env.REACT_APP_API_URL}/frauds/card/delete`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        toast.success('deleted selected card')
        setUpdateRequired(true)
      })
      .catch(function (error) {
        toast.error('could not delete the card')
      });
  }

  useEffect(() => {
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/frauds/card/all`
    })
      .then(res => {
        setFrauds(res.data);
        setSelectedCard(res.data[0])
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  if (!user?.loggedIn)
    return <Redirect to='/login'/>

  const formatDateFromIso = (isoDate) => {
    try {
      return format(new Date(isoDate), 'dd MMM yyyy')
    } catch (err) {
      console.log(err.message);
      return ''
    }
  }

  const filterByDate = () => {
    console.log('filtering')
    const filteredFrauds = []
    frauds.forEach(fraud => {
      let isMatch = true;
      if (filter.from && isBefore(new Date(fraud.dateTime), new Date(filter.from))) {
        isMatch = false
      }
      if (filter.to && isAfter(new Date(fraud.dateTime), new Date(filter.to))) {
        isMatch = false
      }
      if (isMatch)
        filteredFrauds.push(fraud)
      setFrauds(filteredFrauds)
    })
  }

  return <Styled>
    <h4>Card Frauds</h4>
    <div className='toolbar'>
      <div>
        <button className="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#cardEditModal" onClick={startAddCard}>Add new Fraud
        </button>
        <label>From</label>
        <input type="date" name="from" id="from-date" value={filter.from} onChange={updateFilter}/>
        <label>To</label>
        <input type="date" name="to" id="to-date" value={filter.to} onChange={updateFilter}/>
        <button className="btn btn-primary" onClick={filterByDate}>Filter Frauds</button>
      </div>
    </div>
    <table className="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Card No.</th>
        <th scope="col">Card Holder</th>
        <th scope="col">Type</th>
        <th scope="col">Level</th>
        <th scope="col">Transaction Date</th>
        <th scope="col">Options</th>
      </tr>
      </thead>
      <tbody>
      {frauds.map((fraud, index) => <tr onMouseEnter={() => setSelectedCard(fraud)}>
        <th scope="row">{index + 1}</th>
        <td>{fraud.cardNo}</td>
        <td>{fraud.cardHolderName}</td>
        <td>{fraud.cardType}</td>
        <td>{fraud.fraudLevel}</td>
        <td>{formatDateFromIso(fraud.dateTime)}</td>
        <td>
          <button className='option-btn view btn btn-outline-success' data-bs-toggle="modal"
                  data-bs-target="#cardDetailModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye"
                 viewBox="0 0 16 16">
              <path
                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
            </svg>
          </button>
          {(user.userId === fraud.user.userId || user.isAdmin) && <>
            <button className='option-btn btn btn-outline-primary edit' data-bs-toggle="modal"
                    data-bs-target="#cardEditModal">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg>
            </button>
            <button className='option-btn delete btn btn-outline-danger' onClick={deleteCard}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash"
                   viewBox="0 0 16 16">
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </button>
          </>}
        </td>
      </tr>)}
      </tbody>
    </table>

    {/* show card details*/}
    <div className="modal modal-fullscreen" id="cardDetailModal" tabindex="-1"
         aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Card Details</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
          </div>
          <div className="modal-body">
            <table className='table'>
              <tr>
                <td>Card No</td>
                <td>: {selectedCard?.cardNo}</td>
              </tr>
              <tr>
                <td>Card Holder</td>
                <td>: {selectedCard?.cardHolderName}</td>
              </tr>
              <tr>
                <td>Account No</td>
                <td>: {selectedCard?.accNo}</td>
              </tr>
              <tr>
                <td>Card Type</td>
                <td>: {selectedCard?.cardType}</td>
              </tr>
              <tr>
                <td>Expiry Date</td>
                <td>: {toDateStr(selectedCard?.expiryDate)}</td>
              </tr>
              <tr>
                <td>Added On</td>
                <td>: {toDateStr(selectedCard?.dateTime)}</td>
              </tr>
              <tr>
                <td>Fraud Level</td>
                <td>: {selectedCard?.fraudLevel}</td>
              </tr>
              <tr>
                <td>Block Status</td>
                <td>: {selectedCard?.blocked ? 'YES' : 'NO'}</td>
              </tr>
              <tr>
                <td>Added By</td>
                <td>: {selectedCard?.user?.userId}</td>
              </tr>

            </table>
          </div>
        </div>
      </div>
    </div>

    {/* edit card */}
    <div className="modal modal-fullscreen" id="cardEditModal" tabIndex="-1"
         aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Fraud Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
          </div>
          <div class="modal-body">
            <form>
              <table className='table'>
                <tr>
                  <td>Card No</td>
                  <td><input type="text" className="form-control"
                             name="cardNo"
                             value={selectedCard?.cardNo}
                             onChange={handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Card Holder</td>
                  <td><input type="text" className="form-control"
                             name="cardHolderName"
                             value={selectedCard?.cardHolderName}
                             onChange={handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Account No</td>
                  <td><input type="text" className="form-control"
                             name="accNo"
                             value={selectedCard?.accNo}
                             onChange={handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Card Type</td>
                  <td><input type="text" className="form-control"
                             name="cardType"
                             value={selectedCard?.cardType}
                             onChange={handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Expiry Date</td>
                  <td><input type="text" className="form-control"
                             name="expiryDate"
                             value={toDateStr(selectedCard?.expiryDate)}
                             onChange={handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Added On</td>
                  <td><input type="text" className="form-control"
                             name="dateTime"
                             value={toDateStr(selectedCard?.dateTime)}
                             onChange={handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Fraud Level</td>
                  <td><input type="text" className="form-control"
                             name="fraudLevel"
                             value={selectedCard?.fraudLevel}
                             onChange={handleChange}/>
                  </td>
                </tr>
              </table>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateCard}>Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </Styled>
}

export default CardsFraud;
