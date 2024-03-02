
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');

  const togleMode = ()=>{
    if(mode ==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor ='#303039';
      document.title='textutil-darkmode'
    }
    else{
      setmode('light');
      document.body.style.backgroundColor ='white';
    }
  }
  const togleMode2 = ()=>{
    if(mode ==='light')
    {
      setmode('primary');
      document.body.style.backgroundColor ='#7979d3';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor ='white';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} togleMode={togleMode} togleMode2={togleMode2}/>
    <BrowserRouter>
      <div className="container">
        <Routes>
        <Route path="/" element={<TextForm heading="Enter your TEXT to Analyze" mode={mode}/>}> 
          </Route>
          <Route path="/About" element={<About mode={mode}/>}> 
          </Route>
        </Routes>
       </div>
       </BrowserRouter>
     
    </>
  );
}

export default App;
