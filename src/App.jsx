import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  function setCount01(){
    console.log("button count peress button setCount 01 ");
  }

  // Arrow function
  const setCount02 = () =>{
    console.log("button count peress button setCount 02 ");
  }

  function setCount03(name){
    console.log("button count peress button setCount 03 " + name);
  }

  function setCount04(name){
    console.log("button count peress button setCount 04 " + name);
  }

  const setCount05 = (name) => {
    console.log("button count peress button setCount 05 " + name);
  }

  return (
    <>
      
      <div className="card">

        <button onClick={setCount01}> Botton 01 </button>
        <button onClick={setCount02}> Botton 02 </button>
        <button onClick={setCount03("aaaaaaaaaaaaa")}> Botton 03 </button>

        { /* anonymous function (function ekata numak na)  */ }
        <button onClick={
          ()=>{
            setCount04("aaaaaaaaaaaaa")
          }
          }> Botton 04 </button>

        <button onClick={
          ()=>{
            setCount05("aaaaaaaaaaaaa")
          }
          }> Botton 05 </button>  

      </div>
    
    </>
  )
}

export default App
