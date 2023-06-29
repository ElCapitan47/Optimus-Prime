import React from 'react'
import { useState, useEffect } from 'react';

function CheckPrime() {
    const [fixquery, setFixQuery]= useState('');
    const [query,setQuery]= useState('');
    const [data,setData]= useState([]);
    const [isPending, setIsPending]= useState(false);
    
    
    function FetchDetails ({query}) {
      setIsPending(false);
      if(query!=='1')
      {
  
      
     
        fetch("https://prime-number-api.onrender.com/checkIfPrime?num="+ query)
     .then((res)=> {return res.json()})
     .then((vertex)=>{
      setData(vertex);
      setIsPending(true);
      setFixQuery(query);
      //console.log(data);
      });
    }
    else
    {
      setFixQuery(query);
    }
    
    };
    
    
    return (
      <div className='box'>
        <h2>Check Prime</h2>
        <br></br>
        <p>A prime number is a positive integer greater than 1 that has no divisors other than 1 and itself. 
        In simpler terms, a prime number is a number that cannot be evenly divided by any other number except 1 and itself. 
        For example, 2, 3, 5, 7, 11, and 13 are prime numbers since they cannot be divided by any other number without leaving a remainder.</p>
        <div className='input-area'>
        <input type='text' required placeholder='Enter number'value={query} onChange={(e)=>(setQuery(e.target.value))}></input>
        <br></br>
        <button onClick={()=>(FetchDetails({query}))}> Check</button>
        </div>
       <div className='output-area'>
           <h2>Result:</h2>
           {(fixquery!=='' && fixquery!=='1') ?
           data[0][fixquery]!==null ? 
           isPending && <h3>{data[0][fixquery].number} is a prime number of the order {data[0][fixquery].order} </h3>: <h3> {fixquery} is a Composite Number</h3>
          : fixquery=='' ? <h3>  Give Input </h3>: <h3>1 is neither prime nor composite. It is a special number</h3> }
          
            
        </div>
      </div>
     
        
      
    )
}

export default CheckPrime
