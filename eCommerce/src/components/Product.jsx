import React from 'react'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Product = ({items,cart,setCart}) => {

  const addToCart=({id,price,title,description,imgSrc})=>{
const obj={
  id,price,title,description,imgSrc
}

//previos items will remain there and new objs wil be added
setCart([...cart,obj]);
console.log("cart elt",cart)
toast.success('successfully added to cart', {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  // transition: Slide,
  });
  }
  return (
<>
<ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
// transition: Slide
/>
<div className="container">
<div className="row">
    {
items.map((product)=>{
return(
<>

<div className="card">
  <Link className="imggg" to={`/product/${product.id}`} style={{display:'flex', justifyContent:'center',alignItems:'center'}} >
<img className="imgg" src={product.imgSrc} alt="" />
</Link>
<div className="card-body">
    <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
  <div className="btns">
    <button className="btn1">₹{" "}{product.price}</button>
    <button className="btn2"
    onClick={()=>addToCart(product.id,product.price,product.title,product.description,product.imgSrc)}>
    add to cart</button>
  </div>
</div>
</div>
</>

)
})
}



</div>

</div>


</>

  )
}

export default Product