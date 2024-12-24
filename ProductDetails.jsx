import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function ProductDetails() {
  const [product,setproduct]= useState({})
  let params=useParams()
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/'+params.product_id)
      .then((res)=>{
        console.log(res.data)
        setproduct(res.data)
    })
      .catch((err)=>{
        console.log(err)
        alert("Something went wrong Please refresh the page")
      })
  })
  return (
    <main>
        <section>
          <div>
            <img src={product.image} style={{width:"300px"}}/>
            <h3>{product.title}</h3>
            <p><b>Price:</b> ${product.price}</p>
          <p><b>Description:</b> {product.description}</p>
          <p><b>Category:</b> {product.category}</p>
            {product.rating && (
            <p>
              <b>Rating:</b> {product.rating.rate} ({product.rating.count} reviews)
            </p>
          )}
          </div>
        </section>
    </main>
  )
}

export default ProductDetails
