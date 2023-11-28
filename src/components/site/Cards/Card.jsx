import React from 'react'
import "./cards.css"
import { Link } from 'react-router-dom'
import { MdOutlineFavorite, MdRestartAlt } from "react-icons/md";
import { CiHeart } from 'react-icons/ci';
function Card({item}) {
  
  return (
    <div>

      <div className="cart">
        <img src={item.thumbnail} alt="" />
        <div className="hover__div">
        <h5>Add to cart</h5> 
     <div className="di">
     <CiHeart/> 
     <MdRestartAlt />
     </div>
        </div>
       <Link to={`/${item.id}`}> <h3>{item.title}</h3></Link> 
        <p>{item.price}$</p>
       <div className="flexo">
       <MdOutlineFavorite /> 
      <p> add to Fav</p>
       </div>
     

        </div>
    </div>
  )
}

export default Card
