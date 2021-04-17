import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";

export const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="container-fluid bg">
      <section className="row justify-content-center">
        <section className="col 12 col-sm-6 col-md-4">
          <form
            className="form-container p-6 w-40 mx-auto"
            onSubmit={handleSubmit(onSubmit)}
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
                {...register("username")}
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
                {...register("password")}
              />
            </div>

            <div className="button">
              <button type="submit" className="btn btn-primary btn-lg w-100">
                Login
              </button>
            </div>

            <div className="mb-4">
              <hr className="hr-text" />
            </div>

            <div className="signup-link">
              <label className="text-muted">Don't have an account?</label>
              <button type="button" className="btn btn-link">
                Sign up
              </button>
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
  );
};
