import React, {useContext, useState} from "react";
import {Link, Redirect} from "react-router-dom";
import StyledAuth from "./auth.styles";
import {question1, question2, question3} from "../../utils/securityQuestions";
import axios from 'axios';
import {toast} from "react-toastify";
import {AuthContext} from "../../App";

const Register = (props) => {
  const {user, setUser} = useContext(AuthContext);

  const [registered, setRegistered] = useState(false);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    userId: '',
    email: '',
    contactNo: '',
    dob: null,
    gender: null,
    password: '',
    confirmPassword: '',
    ans1: '',
    ans2: '',
    ans3: '',
  });

  const defaultErrors = {
    firstName: null,
    lastName: null,
    userId: null,
    email: null,
    contactNo: null,
    dob: null,
    gender: null,
    password: null,
    confirmPassword: null,
    ans1: null,
    ans2: null,
    ans3: null,
  }

  const [errors, setErrors] = useState(defaultErrors);

  if  (user?.loggedIn){
    return <Redirect to='/dashboard'/>
  }

  const resetError = event => {
    if (['password', 'confirmPassword'].includes(event.target.name))
      setErrors({...errors, password: null, confirmPassword: null})
    else
      setErrors({...errors, [event.target.name]: null})
  }

  const validateForm = () => {
    const newErrors = {};

    if (form.firstName.length === 0)
      newErrors.firstName = 'This field cannot be empty'

    if (form.lastName.length === 0)
      newErrors.lastName = 'This field cannot be empty'

    if (form.userId.length === 0)
      newErrors.userId = 'This field cannot be empty'

    if (!form.email.match(/^[\w-.]+@[\w-.]+\.[\w]+$/))
      newErrors.email = 'Enter a valid email'

    if (!form.contactNo.match(/^[\d- +]{9,15}$/))
      newErrors.contactNo = 'Enter a valid phone number'

    if (!form.dob)
      newErrors.dob = 'Enter a valid date of birth'

    if (!form.gender)
      newErrors.gender = 'Select a gender'

    if (form.password.length < 6)
      newErrors.password = 'Password must have at least 6 characters'

    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match'

    if (form.ans1.length === 0)
      newErrors.ans1 = 'Enter a valid answer'

    if (form.ans2.length === 0)
      newErrors.ans2 = 'Enter a valid answer'

    if (form.ans3.length === 0)
      newErrors.ans3 = 'Enter a valid answer'

    setErrors({...errors, ...newErrors})

    return Object.keys(newErrors).length === 0
  }


  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value});
    resetError(event);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // first reset all error values
    setErrors(defaultErrors);
    const isValid = validateForm();

    if (isValid) {
      try {
        const res = await axios({
          method: 'post',
          url: `${process.env.REACT_APP_API_URL}/user/register`,
          headers: {
            'Content-Type': 'application/json'
          },
          data: form
        })

        if (res.data.isValid) {
          toast.success('Registration successful! now you can log into your account.')
          setRegistered(true);
        } else {
          setErrors({...errors, ...res.data.errors})
        }
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log('form is invalid')
    }
  }

  if (registered)
    return <Redirect to='/login'/>
  else
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
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className='error'>{errors.firstName}</p>}
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control "
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className='error'>{errors.lastName}</p>}
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control "
              name="userId"
              placeholder="Username"
              value={form.userId}
              onChange={handleChange}
            />
            {errors.userId && <p className='error'>{errors.userId}</p>}
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Contact Number"
              name="contactNo"
              value={form.contactNo}
              onChange={handleChange}
            />
            {errors.contactNo && <p className='error'>{errors.contactNo}</p>}
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Email ID"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <p className='error'>{errors.email}</p>}
          </div>

          <div className="row">
            <div className="col-sm-6">
              <label className="form-label mb-1">D.O.B</label>
              <input
                type="date"
                className="form-control"
                id="dob"
                name="dob"
                value={form.dob}
                onChange={handleChange}
              />
              {errors.dob && <p className='error'>{errors.dob}</p>}
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
              {errors.gender && <p className='error'>{errors.gender}</p>}
            </div>
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
            {errors.password && <p className='error'>{errors.password}</p>}
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
            {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
          </div>

          <div className="mb-3">
            <label>Q1: {question1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Answer"
              name="ans1"
              value={form.ans1}
              onChange={handleChange}
            />
            {errors.ans1 && <p className='error'>{errors.ans1}</p>}
          </div>
          <div className="mb-3">
            <label>Q2: {question2}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Answer"
              name="ans2"
              value={form.ans2}
              onChange={handleChange}
            />
            {errors.ans2 && <p className='error'>{errors.ans2}</p>}
          </div>
          <div className="mb-3">
            <label>Q3: {question3}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Answer"
              name="ans3"
              value={form.ans3}
              onChange={handleChange}
            />
            {errors.ans3 && <p className='error'>{errors.ans3}</p>}
          </div>

          <button type="submit" className="btn btn-primary btn-lg w-100">
            Register
          </button>
          <div className="redirect-link mt-3">
            <span className="text-muted">Already have an account?</span>
            <Link to="/login"> Sign In</Link>
          </div>
        </form>
      </StyledAuth>
    );
};

export default Register;
