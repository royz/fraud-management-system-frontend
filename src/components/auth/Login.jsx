import React, {useState} from "react";
import StyledAuth from "./auth.styles";
import {Link} from "react-router-dom";


const Login = ({isAdminLogin}) => {
  const [register, setRegister] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setRegister({...register, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(register);
  };

  return <StyledAuth>
    <form
      onSubmit={handleSubmit}
    >
      <h4>{isAdminLogin ? 'Admin Login' : 'Welcome'}</h4>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          aria-describedby="userNameHelp"
          placeholder="Enter username"
          value={register.username}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Password"
          required
          value={register.password}
          onChange={handleChange}
        />
      </div>

      <div className="button">
        <button type="submit" className="btn btn-primary btn-lg w-100">
          Login
        </button>
      </div>

      <div className="mb-4">
        <hr className="hr-text"/>
      </div>

      <div className="redirect-link">
        <span className="text-muted">Don't have an account?</span>
        <Link to="/register"> Sign Up</Link>
      </div>
      <div className="redirect-link">
        <span className="text-muted">Click here for </span>
        {isAdminLogin
          ? <Link to="/login">Fraud Analysis Personnel Login</Link>
          : <Link to="/admin">Admin Login</Link>
        }
      </div>
    </form>
  </StyledAuth>
}

export default Login;

