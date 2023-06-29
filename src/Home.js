import React from 'react'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

function Home() {
  
  
  
  return (
    <div className='home'>
      <h1>PRIME NUMBERS</h1>
      <br></br>
      <p>
      Prime numbers are a fascinating and essential concept in mathematics that have captivated the minds of mathematicians for centuries. 
      They are the building blocks of the natural numbers and play a fundamental role in number theory, cryptography, and various other 
      mathematical disciplines.Prime numbers possess unique properties and have intrigued mathematicians due to their elusive and unpredictable nature.
      </p>
      <br></br>
      <div className='options'>
            <div className='opt1'>
               <Link to='/checkPrime' className='title' style={{color: "white", fontSize: "30px", textDecoration: "none"}}>Check Prime</Link>
               <p style={{color: "white", fontSize:"18px"}}>Want to check if a number is prime or not? Here is an easy way to do that with our algorithm which takes in an input
                and tells whether the given input is a prime number or a composite number.
                Fun Fact: Try 1! 
               </p>
            </div>
            <div className='opt2'>
               <Link to='/PrimeOrder' style={{color: "white", fontSize: "30px", textDecoration: "none"}}>Prime Order</Link>
               <p style={{fontSize : "18px", color: "white"}}>
                Too tired to find out prime numbers within a given range. We've got your back! This algorithm takes a min limit, max limit and
                a count. Returned is a list of prime integers lying between the given limits( both inclusive).
               </p>
            </div>
            <div className='opt3'>
               <Link to='/about' style={{color: "white", fontSize: "30px", textDecoration: "none"}}>About</Link>
               <p style={{fontSize : "18px", color: "white"}}>
                Too tired to find out prime numbers within a given range. We've got your back! This algorithm takes a min limit, max limit and
                a count. Returned is a list of prime integers lying between the given limits( both inclusive).
               </p>
            </div>
            
      </div>
    </div>
    
  )
}

export default Home


