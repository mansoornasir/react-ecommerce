import React, {useState} from 'react'
import axios from 'axios'
import "react-notifications/lib/notifications.css";
import {NotificationManager} from "react-notifications"

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const show = (name) => {
    NotificationManager.success(`User ${name} has been logged in successfully.`, "", 3000);
  }

  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/user/login", {
      email: email,
      password: password,
    }).then(res => {
      console.log(res)
      // show(res.data);
    })
  } 
  
  return (
    <div className="container">
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={e => login(e)}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" >
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login