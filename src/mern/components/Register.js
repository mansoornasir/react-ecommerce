import axios from "axios";
import React, { useState } from "react"
import "react-notifications/lib/notifications.css";
import {NotificationManager} from "react-notifications"

export default function (props) {

  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();

  const show = (name) => {
    NotificationManager.success(`User ${name} has been successfully registered.`, "", 3000);
  }
  
  const register = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/user/register", {
      name: fullName,
      email: email,
      password: password,
      address: address
    }).then(res => {
      show(res.data.name);
    })
  }


  return (
    <div className="container">
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={e => register(e)}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Full Name"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="form-group mt-3">
              <label>Address</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}