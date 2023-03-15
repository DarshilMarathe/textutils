// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar.js"
import TextForm from "./components/TextForm";
import About from "./components/About";
// let name ="Darshil";
import { useState } from "react";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   // Switch, -- no more in use
//   Route,
//   Link
// } from "react-router-dom"; 

// ----------- gh pages -> router Issue 
// import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
// React uses partial matching -- so better to write whole path /about/go aesa



function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (title,descrp) => {
      setAlert({
        msg : title,
        descrp : descrp
      });
      setTimeout(() =>{
        setAlert(null);
      },1500);
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" about="About US"/>
      <Alert alert = {alert}></Alert>
    {/* <Layout> */}
      {/* <Routes> */}
        {/* <Route exact path="/" element={<div className="container my-3"> */}
        <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below"/>
    <About showAlert={showAlert}/>
    {/* </div>}/> */}
    </div> 
        {/* <Route exact path="/about" element={<About showAlert={showAlert}/>}/> */}
        {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
        {/* <Route path="*" element={<NotFound/>}/> */}
      {/* </Routes> */}
    {/* </Layout> */}
  {/* </Router> */}



    {/* // <>
    // <Navbar title="TextUtils" about="About US"/>
    // <Alert alert = {alert}></Alert>
    // <div className="container my-3">
    // <TextForm showAlert={showAlert} heading="Enter the text to analyze below"/>
    // <About showAlert={showAlert}/>
    // </div>
    

    // <About showAlert={showAlert}/>
    // </> */}
    </>
  );
}

export default App;
