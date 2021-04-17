import React, { useState } from "react";
import "./Registrationform.css";
// import PropTypes from "prop-types";

function Registrationform(props) {
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    dateofbirth: "",
    gender: "",
    contactnumber: "",
    emailid: "",
    userid: "",
    password: "",
    confirmpassword: "",
  });
  const handlefirstnamechange = (event) => {
    setValues({ ...values, firstname: event.target.value });
  };
  const handlelastnamechange = (event) => {
    setValues({ ...values, lastname: event.target.value });
  };
  const handledateofbirthchange = (event) => {
    setValues({ ...values, dateofbirth: event.target.value });
  };
  const handlecontactnumberchange = (event) => {
    setValues({ ...values, contactnumber: event.target.value });
  };
  const handleemailidchange = (event) => {
    setValues({ ...values, emailid: event.target.value });
  };
  const handleuseridchange = (event) => {
    setValues({ ...values, userid: event.target.value });
  };
  const handlepasswordchange = (event) => {
    setValues({ ...values, password: event.target.value });
  };
  const handleconfirmpasswordchange = (event) => {
    setValues({ ...values, confirmpassword: event.target.value });
  };
  const handlegenderchange = (event) => {
    setValues({ ...values, gender: event.target.value });
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    if (
      values.firstname &&
      values.lastname &&
      values.dateofbirth &&
      values.contactnumber &&
      values.emailid &&
      values.userid &&
      values.password &&
      values.confirmpassword &&
      values.gender
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <section className="container-fluid bg">
      <section className="row justify-content-center">
        <section className="col 12 col-sm-5 col-md-5 px-5 ">
          <form
            onSubmit={handlesubmit}
            className="form-container p-8 w-45  pt-4 px-5 pb-5  mt-3"
          >
            <p id="wlcm-text" className="h1 font-link  ">
              <strong>Register Here !</strong>
            </p>
            {/* {submitted && valid ? <div className="success-message"> form is submitted</div> : null} */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="First Name"
                value={values.firstname}
                onChange={handlefirstnamechange}
              />
              {submitted && !values.firstname ? (
                <span className="text-danger">*please enter first name</span>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control "
                id="lastname"
                placeholder="Last Name"
                value={values.lastname}
                onChange={handlelastnamechange}
              />
              {submitted && !values.lastname ? (
                <span className="text-danger">*please enter last name</span>
              ) : null}
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label forName="dob" className="form-label ">
                  D.O.B
                </label>
                <input
                  type="date"
                  className="form-control "
                  id="dob"
                  value={values.dateofbirth}
                  onChange={handledateofbirthchange}
                />
                {submitted && !values.dateofbirth ? (
                  <span className="text-danger">
                    *please enter date of birth
                  </span>
                ) : null}
              </div>
              <div className="col-sm-5">
                <label className="mt-0 pb-2">Gender </label>
                <select
                  className="py-2 "
                  defaultValue="Select Gender"
                  onChange={handlegenderchange}
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
                id="contactnumber"
                placeholder="Contact Number"
                value={values.contactnumber}
                onChange={handlecontactnumberchange}
              />
              {submitted && !values.contactnumber ? (
                <span className="text-danger">
                  *please enter contact number
                </span>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email ID"
                value={values.emailid}
                onChange={handleemailidchange}
              />
              {submitted && !values.emailid ? (
                <span className="text-danger">*please enter emailid</span>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="userid"
                placeholder="User ID"
                value={values.userid}
                onChange={handleuseridchange}
              />
              {submitted && !values.userid ? (
                <span className="text-danger">*please enter userid</span>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={values.password}
                onChange={handlepasswordchange}
              />
              {submitted && !values.password ? (
                <span className="text-danger">*please enter a password</span>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="confirmpassword"
                value={values.confirmpassword}
                placeholder="Confirm Password"
                onChange={handleconfirmpasswordchange}
              />
              {submitted && !values.confirmpassword ? (
                <span className="text-danger">*confirm your password</span>
              ) : null}
            </div>

            <button type="submit" className="btn btn-primary btn-lg w-100">
              Submit
            </button>
          </form>
        </section>
      </section>
    </section>
  );
}

// Registrationform.propTypes = {};

export default Registrationform;
