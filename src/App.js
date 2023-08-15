import React, { useEffect, useState } from 'react'
import {Footer,Container,Hero } from './Component/index'
import  "./App.css"
import { Hero1, Hero2, Hero3, Hero4 } from './Component/Hero/Hero'
import HashLoader from "react-spinners/HashLoader";

// import About from './About/About';



const  App = ()=> {
  const[loading , setloading] = useState(false);


  useEffect(()=>{
    setloading(true);

    setTimeout(()=>{
      setloading(false)
    },3000)
},[])

  return (
    <>
        {loading ?
        <div className='loader'>
          <HashLoader className='HashLoader' color={"#ffb300"} loading ={loading}   speedMultiplier={1.2} size={150}/>
        </div>:
        <>
      
      <Container> 
        <Hero/>
        <Hero1/>
        <Hero2/>
        <Hero3/>
        <Hero4/>
        <Footer/>
      </Container>  
      </>
      }
    </>
  )
}

export default App