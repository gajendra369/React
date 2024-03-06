
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , { useState } from 'react';

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null)

  const showalert=(msg,typ)=>{
    setAlert({
      msg:msg,
      type:typ
    }
    )
  }
  const togglemode= () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showalert(" Dark mode enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showalert("Success Light mode enabled","success")
    }
  }
  return (
    <>
      <Navbar title="text utils" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className='container'>
      <TextForm heading="Enter text to analyze" mode={mode}/>
      </div>
      
    </>

  );
}

export default App;
