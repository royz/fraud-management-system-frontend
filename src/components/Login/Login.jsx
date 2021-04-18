import React, {useState} from "react";
import "./Login.css";
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

  return <section className="container-fluid bg login-container">
    <section className="row justify-content-center">
      <section className="col 12 col-sm-6 col-md-4">
        <form
          className="form-container p-6 w-40 mx-auto"
          onSubmit={handleSubmit}
        >
          <p id="wlcm-text" className="h1 font-link  ">
            <strong>Welcome</strong>
          </p>
          <div className="form-group">
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
          <div className="form-group">
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

          <div className="signup-link">
            <p className="text-muted">
              Don't have an account? <Link to='/register'>Sign up</Link>
            </p>

          </div>

          <div className="admin-login-link">
            <label className="text-muted">Click here for</label>
            <button type="button" className="btn btn-link">
              admin login
            </button>
          </div>
        </form>
      </section>
    </section>
  </section>
}

export default Login;

