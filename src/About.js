import React from 'react'
import { useState, useEffect } from 'react';

function About() {
    const [data,setData]= useState('');
    const [isPending, setIsPending]= useState(false);
    useEffect(()=>
    {
        fetch("https://prime-number-api.onrender.com/")
        .then((res)=>{return res.json()})
        .then((vertex)=>
        {
            setData(vertex);
            setIsPending(true);
        })
    },[]);
  return (
    <div >
    {
        isPending && 
        <div className='about-output'>
           <p>Below are the algorithm details: </p>
           <p>About : {data.about}</p>
           <p>Maximum Prime Number in Database: {data.max_prime_number}</p>
           <p>Maximum Order in Database: {data.max_prime_order}</p>
        </div>
    }
     
    </div>
  )
}

export default About
