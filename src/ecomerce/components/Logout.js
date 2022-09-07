import React, { useEffect } from 'react'
import "react-notifications/lib/notifications.css";
import {NotificationManager} from "react-notifications"
import { useNavigate } from 'react-router-dom';
const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(!token) {
      NotificationManager.error("Already logged out", "", 3000);
      navigate("/home")
    }
    else {
      localStorage.removeItem("token")
      NotificationManager.warning("Logged out successfully", "", 3000);
      navigate("/home");
    }
  })
  return (
    <div>Logout</div>
  )
}

export default Logout