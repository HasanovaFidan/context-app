import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./detail.css"
import { FaRegHeart } from 'react-icons/fa';


function Detail() {
  const { id } = useParams()
  const[counter,setCounter]=useState(0)
  const [item, setItem] = useState({})
  const artir =()=>{
    setCounter(prev=>prev+1)

  }
  const azalt =()=>{
  if(counter>0){
    setCounter(prev=>prev-1)
  }
  }
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then(res => {
      setItem(res.data);

    })
  }, [])
  return (
    <div>
    <div className='flex'>
      <div className="imeg">
      <img src={item?.thumbnail} alt="" />
      </div>
    <div className="p">
    <h1>Name:{item.title}</h1>
    <p>Brand:{item.brand}</p>
    <p>Rating:{item.rating}</p>
    <p>Category:{item.category}</p>
   
   <p>{item.description}</p>
   <div className="container">
 <div className="heart">
 <FaRegHeart/>
 </div>
   <div className="divv">
    <button onClick={artir}>+</button>
    <h6>{counter}</h6>
    <button onClick={azalt}>-</button>
   </div>
   <div className="bten">
    <button>Add To Card</button>
   </div>

   </div>
    </div>
    </div>
    <div className="bos"></div>
    <div className="card__kecidd">
        <h2>Best Seller</h2>
        <h2>New Arrials</h2>
        <h2>Most Popular</h2>
      </div>
      <div className="bos"></div>
      <div className="detail__div">
      <h3>Introduction</h3>
      <p>Lorem ipsum dolor sit amet,  consectetur adipisicing elit,  sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /> quis nostrud exercitation ullamco laboris.</p>
    </div>
      </div>
  )
}

export default Detail
