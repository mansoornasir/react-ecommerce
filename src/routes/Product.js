import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'

const Product = () => {
  const {pid} = useParams();
  const navigation = useNavigate(); 
  return (
    <div>Product no : {pid}
      <p>SELECT * from products WHERE prodcut_id={pid}</p>
      <button style={{width: 300, height: 300, backgroundColor: 'red', color: 'white'}} onClick={() => {
        navigation("/products")
      }}>BACK</button>
    </div>
  )
}

export default Product