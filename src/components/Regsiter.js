import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Register = () => {
    const [data, setData] = useState();

    useEffect(()=> {

        axios.post("https://api-try-n-save.herokuapp.com/api/user/register", {
            name: "Jawad",
            email: "jawad5@gmail.com",
            password:"Pakistan123@",
            address:"Khyber previous Fata"
        }).then(res => {
            setData(res.data.name)
        })

    },[data])
  return (
    <div>
        <strong>User {data} is successfully registered</strong>
    </div>
  )
}

export default Register