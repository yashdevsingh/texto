import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) =>
    {
      setAlert({
        msg: message,
        typ: type
      })
    }

  const toggleMode = () =>
    {
      if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = 'black';
       showAlert("Dark Mode has been enabled.", "success");
      }

      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode has been enabled.", "success");
       }
    }
  return (
    <>
      <div>
        <Router>
          <Navbar title = "Texto" aboutText = "About Texto" mode={mode} toggleMode = {toggleMode}/>
          <div className="alert"><Alert alert={alert}/></div>
          <div className="container my-3"></div>
          {/*<Textform showAlert={showAlert} heading="Enter Text to analyze" mode={mode}/>*/}
          <Routes>
            <Route path="/" element={<Textform showAlert={showAlert} heading = "Enter Text to Analyze" mode = {mode} />}/>
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>   
    </>
  );
}

export default App;
