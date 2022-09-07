import React, {useEffect, useState} from 'react'
import axios from 'axios';
import "react-notifications/lib/notifications.css";
import {NotificationManager} from "react-notifications"
import {Link}from 'react-router-dom'
const Products = () => {
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    const token = localStorage.getItem("token")
    if(!token) return NotificationManager.error("You need to login first.","",3000)

    axios.get("https://api-try-n-save.herokuapp.com/api/products", {
      headers: {
        token: token
      }
    })
        .then(res => {
          setProducts(res.data);
        })
        .catch(err => {
          NotificationManager.error("You need to login first.","",3000)
        })
  }, [products])
  return (
    <div>
      {products.length > 0 && products.map(prod => {
        return (
                <div>
                  <Link to={"/product/"+prod.id}>
                    {prod.title}
                  </Link>
                </div>
                )
      })}
    </div>
  )
}

export default Products