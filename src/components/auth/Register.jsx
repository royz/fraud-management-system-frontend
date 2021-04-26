import React, {useState} from "react";
import {Link} from "react-router-dom";
import StyledAuth from "./auth.styles";
import {question1, question2, question3} from "../../utils/securityQuestions";

const Register = (props) => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    dob: null,
    gender: null,
    password: '',
    confirmPassword: '',
    q1: '',
    q2: '',
    q3: '',
  });

  const defaultErrors = {
    firstname: null,
    lastname: null,
    email: null,
    contact: null,
    dob: null,
    gender: null,
    password: null,
    confirmPassword: null,
    q1: null,
    q2: null,
    q3: null,
  }

  const [errors, setErrors] = useState(defaultErrors);

  const setError = (field, message) => {
    setErrors({...errors, [field]: message})
  }


  const validateForm = () => {
    // first reset all error values
    setErrors(defaultErrors)

    if (form.firstname.length === 0) {
      setError('firstname', 'This field cannot be empty')
    }
    if (form.lastname.length === 0) {
      setError('lastname', 'This field cannot be empty')
    }
    if (!form.email.match(/[\w-.]+@[\w-.]+\.[\w]+/)) {
      setError('email', 'Enter a valid email')
    }
    if (!form.contact.match(/[\d- +]{9,}/)) {
      setError('contact', 'Enter a valid phone number')
    }
    if (!form.dob(/[\d- +]{9,}/)) {
      setError('dob', 'Enter a valid date of birth')
    }
    if (!form.gender) {
      setError('gender', 'Select a gender')
    }
    if (form.password.length < 6) {
      setError('password', 'Password must have at least 6 characters')
    }
    if (form.password !== form.confirmPassword) {
      setError('confirmPassword', 'Passwords do not match')
    }
    if (form.q1.length === 0) {
      setError('q1', 'Enter a valid answer')
    }
    if (form.q2.length === 0) {
      setError('q2', 'Enter a valid answer')
    }
    if (form.q3.length === 0) {
      setError('q3', 'Enter a valid answer')
    }

    for (const [key, value] of Object.entries(errors)) {
      if (value) return false
    }
    return true
  }


  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <StyledAuth>
      <form
        onSubmit={handleSubmit}
      >
        <h4>Create an Account</h4>

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
              name="dob"
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
            name="contact"
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

        <div className="mb-3">
          <label>Q1: {question1}</label>
          <input
            type="text"
            className="form-control"
            placeholder="Answer"
            name="q1"
            value={form.q1}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Q2: {question2}</label>
          <input
            type="text"
            className="form-control"
            placeholder="Answer"
            name="q2"
            value={form.q2}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Q3: {question3}</label>
          <input
            type="text"
            className="form-control"
            placeholder="Answer"
            name="q3"
            value={form.q3}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-lg w-100">
          Register
        </button>
        <div className="mb-4">
          <hr className="hr-text"/>
        </div>
        <div className="redirect-link">
          <span className="text-muted">Already have an account?</span>
          <Link to="/login"> Sign In</Link>
        </div>
      </form>
    </StyledAuth>
  );
};

export default Register;
