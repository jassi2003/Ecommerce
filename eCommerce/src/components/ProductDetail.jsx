import React ,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { items } from './Data'
import Product from './Product'


const ProductDetail = () => {
    const{id}=useParams()
    const [product,setProduct]=useState({});
    const [relatedProduct,setRelatedProduct]=useState([]);





    useEffect(()=>{
        const filterProduct=items.filter((product)=>product.id==id)
setProduct(filterProduct[0])
},[id])

useEffect(()=>{
  const relatedProducts=items.filter((prod)=>prod.category===product.category)
  setRelatedProduct(relatedProducts)
  },[id,product.category]);

  return (
    <>

    <div className="containerr">
       
            <img src={product.imgSrc} alt="" />
     <div className="contt">
        <h6 className="card-title">{product.title}</h6>
        <p className="card-text">{product.description}</p>
  <div className="btns">
    <button className="btn1">₹{" "}{product.price}</button>
    <button className="btn2">add to cart</button>
    </div>
        </div>
        </div>
        <div className="heading">
        <h1  style={{display:"flex",alignIitems:"center",justifyContent:"center",fontSize:"3rem"}}>Realted Products</h1>
        </div>
        <Product items={relatedProduct}/>
      
    </>
  )
}

export default ProductDetail