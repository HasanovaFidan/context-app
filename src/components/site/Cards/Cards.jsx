import React, { useContext, useEffect, useState } from 'react';
import "./cards.css";
import Card from './Card';
import axios from 'axios';
import DataContexs from '../../../context';

function Cards() {
  let {data,setData,loading,setLoading}=useContext(DataContexs)

  return (
    <div className='all'>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : (
        data?.map((item, index) => (
          <div key={index} className="all">
            <Card item={item}/>
          </div> 
        ))
      )}
    </div>
  );
}

export default Cards;
