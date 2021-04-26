import React, {useState} from 'react';
import StyledAuth from "./auth.styles";
import {question1, question2, question3} from "../../utils/securityQuestions";

const ForgotPassword = props => {
  const [form, setForm] = useState({
    userId: '',
    ans1: '',
    ans2: '',
    ans3: '',
  });

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return <StyledAuth>
    <form
      onSubmit={handleSubmit}
    >
      <h4>Reset Password</h4>

      <div className="mb-3">
        <label htmlFor="userId">User Id</label>
        <input
          type="text"
          className="form-control"
          id="userId"
          name="userId"
          placeholder="Enter User Id"
          value={form.phone}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="ans1">Q1: {question1}</label>
        <input
          type="text"
          className="form-control"
          id="ans1"
          name="ans1"
          placeholder="Answer"
          value={form.ans1}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="ans1">Q2: {question2}</label>
        <input
          type="text"
          className="form-control"
          id="ans2"
          name="ans2"
          placeholder="Answer"
          value={form.ans2}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="ans3">Q3: {question3}</label>
        <input
          type="text"
          className="form-control"
          id="ans3"
          name="ans3"
          placeholder="Answer"
          value={form.ans3}
          onChange={handleChange}
        />
      </div>

      <div className="button">
        <button type="submit" className="btn btn-primary btn-lg w-100">
          Next
        </button>
      </div>
    </form>
  </StyledAuth>
}

export default ForgotPassword;
