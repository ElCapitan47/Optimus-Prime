import React from 'react'
import { useState } from 'react';
function PrimeOrder() {

  const[min, setMin]= useState('');
  const[max, setMax]= useState('');
  const[count, setCount]= useState('');
  const [data, setData]= useState([]);
  const[isPending, setIsPending]= useState(false);
  //const[cnt, setCnt]= useState(0);
  
  const handlePrime = (e) => {
    //console.log({min,max,count});
    e.preventDefault();
    setIsPending(false);
    fetch("https://prime-number-api.onrender.com/primeNumbers?min="+ min + "&max=" + max + "&len=" + count)
    .then((res)=> {return res.json()})
    .then((vertex)=>{
        
      setData(vertex);
      setIsPending(true);
      //console.log(data);
        
        
        
    });
    /*if(isPending)
        {
            for(let i=0;i<count;i++)
            {
                console.log(data[i]);
            }
        }*/
  }
  
  
  
  return (
    <div className='prime-order'>
      <h2 style={{color: 'white'}}>Prime Order</h2>
      <div className='para-content'> 
        <p>One of the intriguing aspects of prime numbers is their seemingly random distribution. 
          As we examine larger prime numbers, their occurrence becomes less frequent, and no deterministic pattern has been found to predict
          their exact positions within the sequence of natural numbers.
          This elusive nature has led mathematicians to develop sophisticated algorithms and techniques to identify and study prime numbers.</p>
          <p>We have developed an algorithm that takes in a range (min, max)(both inclusive) and count, where the count is the number of prime numbers required inside
            the given range.
          </p>
      </div>
      <div className='form-box'>
        <form onSubmit={handlePrime} className='my-form'>
        <div className='pair'>
        <label style={{color: "white"}}>Enter Minimum Number</label>
        <input type='number' required placeholder='Enter min' value={min} onChange={(e)=>(setMin(e.target.value))}></input>
        </div>
        <div className='pair'> 
        <label style={{color: "white"}}>Enter Maximum Number</label>
        <input type='number' required placeholder='Enter max' value={max} onChange={(e)=>(setMax(e.target.value))}></input>
        </div>
        <div className='pair'>
        <label style={{color: "white"}}>Enter required count of numbers</label>
        <input type='number' required placeholder='Enter count' value={count} onChange={(e)=>(setCount(e.target.value))}></input>
        </div>
        <button>Generate</button>
        </form>
       
      </div>
      {isPending && <div className='output-area'>
        <h3>The desired numbers are:</h3>
        {
            data.map((field)=>
            (
              <li style={{color: "white"}}>{field.number}</li>
            ))
        }
      </div>}
    </div>

  )
}

export default PrimeOrder
