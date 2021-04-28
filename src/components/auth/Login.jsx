import React, {useContext, useState} from "react";
import StyledAuth from "./auth.styles";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import {AuthContext} from "../../App";


const Login = ({isAdminLogin}) => {
  const {user, setAuth} = useContext(AuthContext);

  const [loggedIn, setLoggedIn] = useState(false);

  const [form, setForm] = useState({
    userId: "",
    password: "",
  });

  const defaultErrors = {
    userId: null,
    password: null,
  }

  const [errors, setErrors] = useState(defaultErrors);

  if (user?.loggedIn) {
    return <Redirect to='dashboard'/>
  }


  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value});
    setErrors({...errors, [event.target.name]: null})
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/user/login`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: form
      })

      if (res.data.loggedIn) {
        setLoggedIn(true)
        setAuth(res.data)
        toast.success('Logged in successfully!')
      } else {
        setErrors({userId: true, password: true})
      }

    } catch (err) {
      console.log(err.message);
      toast.error('Could not log in. Something went wrong.')
    }
  };


  if (loggedIn)
    return <Redirect to='/dashboard'/>
  else
    return <StyledAuth>
      <form
        onSubmit={handleSubmit}
      >
        <h4>{isAdminLogin ? 'Admin Login' : 'Welcome'}</h4>

        <div className="mb-3">
          <input
            required
            type="text"
            className="form-control"
            name="userId"
            aria-describedby="userNameHelp"
            placeholder="Username"
            value={form.userId}
            onChange={handleChange}
          />
          {errors.firstName && <p className='error'>Check your username</p>}
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={handleChange}
          />
          {errors.firstName && <p className='error'>Check your password</p>}
        </div>

        <div className="button">
          <button type="submit" className="btn btn-primary btn-lg w-100">
            Login
          </button>
        </div>
        <div className="redirect-link mt-3">
          <span className="text-muted">Don't have an account?</span>
          <Link to="/register"> Sign Up</Link>
          <br/>
          <span className="text-muted">Click here for </span>
          {isAdminLogin
            ? <Link to="/login">Fraud Analysis Personnel Login</Link>
            : <Link to="/admin">Admin Login</Link>
          }
          <br/>
          <Link to="/forgot-userid">Forgot UserId</Link> | <Link to="/forgot-password">Forgot Password</Link>
        </div>
      </form>
    </StyledAuth>
}

export default Login;

