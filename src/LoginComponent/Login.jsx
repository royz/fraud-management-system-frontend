import React from 'react'
import './Login.css';


export const Login = () => {
  return (
    
  <section className="container-fluid bg">
      
    <section className="row justify-content-center">

    
      <section className="col 12 col-sm-6 col-md-4">
      <form className="form-container ">
      <p id="wlcm-text" class="h1 font-link  "><strong>Welcome</strong></p>
      <div class="form-group">
      
        
        <input type="text" class="form-control" id="username" aria-describedby="userNameHelp" placeholder="Enter username" required/>
        
      </div>
      <div class="form-group">
       
        <input type="password" class="form-control" id="password" placeholder="Password" required/>
      </div>
      
      <div className="button">
        <button type="submit" class="btn btn-primary btn-lg w-100">Login</button>
      </div>

      <div class="mb-4">
                <hr  class="hr-text"/>
            </div>
      
      <div className="signup-link">
      <label class="text-muted">Don't have an account?</label>
      <button type="button" class="btn btn-link">Sign up</button>
      </div>

      <div className="admin-login-link">
      <label class="text-muted">Click here for</label>
      <button type="button" class="btn btn-link">admin login</button>
      </div>
      
    </form>
      </section>
    </section>
  </section>

  )
}
