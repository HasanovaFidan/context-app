import React, { useContext } from 'react';
import "./Header.css"
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import DataContexs from '../../context';



function Header() {
 const {data,setData,orginal,setOrginal} = useContext(DataContexs)
 const handleChange=(e)=>{
  let search=e.target.value.trim().toLowerCase()
 if(search==""){
  setData(orginal)
 }
 else{
  let searchedCards=data.filter(data=>data.title.trim().toLowerCase().includes(search))
  setData(searchedCards)
 }
  }
  return (
    <div className='full'>
  <div>
  <div className="header">
                <div className="left">
                    <h1>Supro.</h1>
                </div>
                <div className="middle">
     <Link to={"/"} ><p>home</p></Link>   
     <Link to="favorite">Fav</Link>            
                    <p>Shop</p>
                    <p>Products</p>
                    <p>Pages</p>
                  
                    <p>Contact</p>
                  <div className="inp">
                  <input   type="text" placeholder='search entire store here'  onChange={(e)=>handleChange(e)}  />
                    <CiSearch className='sorc'/>
                  </div>

                </div>
                <div className="right">
                <CiUser/>
                <CiHeart/>
                <CiShoppingCart />
                <IoSettingsOutline/>
                    
                </div>
                
            </div>
 
  </div>
  
    </div>
  );
}

export default Header;
