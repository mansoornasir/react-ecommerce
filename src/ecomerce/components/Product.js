import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "react-notifications/lib/notifications.css";
import {NotificationManager} from "react-notifications"

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token")
    if(!token) return NotificationManager.error("You need to login first.","",3000)
    axios.get(
      "https://api-try-n-save.herokuapp.com/api/product?pid="+params.id, {
      headers: {
        token: token
      }
    }).then(res => {
          setProduct(res.data)
        })
        .catch(err => {
          console.log(err)
        })
  }, [])

  return (
    <div>
      <p>{product.id}</p>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <p>{product.rating.rate}</p>
      <p>{product.price}</p>
      <p><img src={product.image} width={300} height={300}/></p>
    </div>
  )
}

export default Product