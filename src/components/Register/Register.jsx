import React, {useState} from 'react';
import "./Registrer.css";
import {Link} from "react-router-dom";

const Register = props => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    dob: '',
    gender: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form)
  }

  return <section className="container-fluid bg register-container">
    <section className="row justify-content-center">
      <section className="col 12 col-sm-5 col-md-5 px-5 ">
        <form
          onSubmit={handleSubmit}
          className="form-container p-8 w-45  pt-4 px-5 pb-5  mt-3"
        >
          <p id="welcome-text" className="h1 font-link  ">
            <strong>Create an Account</strong>
          </p>
          {/*{/!* {submitted && valid ? <div className="success-message"> form is submitted</div> : null} *!/}*/}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="firstname"
              placeholder="First Name"
              value={form.firstname}
              onChange={handleChange}
            />
            {/*{submitted && !form.firstname ? (
              <span className="text-danger">please enter first name</span>
            ) : null}*/}
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control "
              name="lastname"
              placeholder="Last Name"
              value={form.lastname}
              onChange={handleChange}
            />
            {/*{submitted && !values.lastname ? (
              <span className="text-danger">please enter last name</span>
            ) : null}*/}
          </div>
          <div className="row">
            <div className="col-sm-6">
              <label className="form-label mb-1">D.O.B</label>
              <input
                type="date"
                className="form-control "
                id="dob"
                name='dob'
                value={form.dob}
                onChange={handleChange}
              />
              {/*{submitted && !values.dateofbirth ? (
                <span className="text-danger">
                    *please enter date of birth
                  </span>
              ) : null}*/}
            </div>
            <div className="col-sm-6">
              <label className="mt-0 mb-1">Gender</label>
              <select
                className="py-2"
                defaultValue="Select Gender"
                name="gender"
                onChange={handleChange}
              >
                <option defaultValue>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Contact Number"
              value={form.contact}
              onChange={handleChange}
            />
            {/*{submitted && !values.contactnumber ? (
              <span className="text-danger">
                  *please enter contact number
                </span>
            ) : null}*/}
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email ID"
              value={form.email}
              onChange={handleChange}
            />
            {/*{submitted && !values.emailid ? (
              <span className="text-danger">*please enter emailid</span>
            ) : null}*/}
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
            {/*{submitted && !values.password ? (
              <span className="text-danger">*please enter a password</span>
            ) : null}*/}
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={form.confirmPassword}
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            {/*{submitted && !values.confirmpassword ? (
              <span className="text-danger">*confirm your password</span>
            ) : null}*/}
          </div>

          <button type="submit" className="btn btn-primary btn-lg w-100">
            Register
          </button>
          <div className="mb-4">
            <hr className="hr-text"/>
          </div>
          <div className="signup-link">
            <label className="text-muted">Already have an account?</label>
            <Link to='/login'> Sign In</Link>
          </div>
        </form>
      </section>
    </section>
  </section>
}

export default Register;
