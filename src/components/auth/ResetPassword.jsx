import React, {useState} from 'react';
import StyledAuth from "./auth.styles";

const ResetPassword = props => {
  const [form, setForm] = useState({
    password: '',
    confirmPassword: ''
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
        <input
          type="text"
          className="form-control"
          id="password"
          name="password"
          placeholder="Enter new Password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
      </div>

      <div className="button">
        <button type="submit" className="btn btn-primary btn-lg w-100">
          Change Password
        </button>
      </div>
    </form>
  </StyledAuth>
}

export default ResetPassword;
