
import { useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [excuse,setExcuse]=useState("")
  const fetchData=async(reason)=>{
    const{data}=await axios.get(`https://excuser-three.vercel.app/v1/excuse/${reason}`)
    setExcuse(data[0].excuse);
  }
  return (
    <div>
<div className='flex gap-6 bg-black text-white flex-col font-semibold justify-center items-center min-h-screen'>
  <h1>Generate an excuse</h1>
 <div className="bg-yellow-500 text-black rounded-md px-5 py-3"><button onClick={() => {fetchData("funny")}}>funny</button></div> 
  <div className="bg-orange-800 text-black rounded-md px-5 py-3"><button onClick={() => {fetchData("developers")}}>Developer</button></div>
 <div className="bg-green-500 text-black rounded-md px-5 py-3"><button onClick={() => {fetchData("office")}}>office</button></div> 
 <h1 className='gap-5'>{excuse}</h1>
  </div>      

    </div>
    
  );
}

export default App;