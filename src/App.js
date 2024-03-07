import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, { useState } from 'react';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, typ) => {
    setAlert({
      msg: msg,
      type: typ
    });
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
    <div>
        <Navbar title="text utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
    </div>
    <div className='container mb-3'><TextForm heading="Enter text to analyze" mode={mode} /></div>
    </>
    // <Router>
    //   <Navbar title="text utils" mode={mode} toggleMode={toggleMode} />
    //   <Alert alert={alert} />
    //   <Routes>
        // <div className='container mb-3'><TextForm heading="Enter text to analyze" mode={mode} /></div>
        
    //     <Route path="/about" element={ <About />}>
         
    //     </Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
