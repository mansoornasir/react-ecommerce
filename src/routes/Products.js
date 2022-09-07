import React from 'react'
import { useSearchParams } from 'react-router-dom'
const Products = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams)
  const params = Object.fromEntries([...searchParams]);
  return (
    <div>Products {params.sort}</div>
  )
}

export default Products