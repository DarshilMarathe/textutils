import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// React uses partial matching -- so better to write whole path /about/go aesa

function App() {
  const [mode, setmode] = useState('light')

  const [alert, setAlert] = useState(null);
  const showAlert = (title, descrp) => {
    setAlert({
      msg: title,
      descrp: descrp,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  function togglemode(){
    mode === "light" ? setmode("dark") : setmode("light");
  }

  return (
    <Router>
      <Navbar mode = {mode} togglemode={togglemode} title="TextUtils" about="About US" />
      <Alert alert={alert}></Alert>
      {/* <Layout> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="container my-3">
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
              />
              <About showAlert={showAlert} />
            </div>
          }
        />
        <Route exact path="/about" element={<About showAlert={showAlert} />} />
        {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
      {/* </Layout> */}
    </Router>

    // <>
    // <Navbar title="TextUtils" about="About US"/>
    // <Alert alert = {alert}></Alert>
    // <div className="container my-3">
    // <TextForm showAlert={showAlert} heading="Enter the text to analyze below"/>
    // <About showAlert={showAlert}/>
    // </div>

    // <About showAlert={showAlert}/>
    // </>
  );
}

export default App;
