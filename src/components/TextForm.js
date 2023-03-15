import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper case was clicked" );
    let newText = text.toUpperCase();
    setText(newText); //_> change in state
    props.showAlert("success","Changed to Uppercase");
  };

  //TO handle the error in console
  const handleOnChange = (event) => {
    // console.log("Onchange gg");
    setText(event.target.value); // _> will be able to change the content now
  };

  const handleLowClick = (event) => {
    setText(text.toLowerCase());
    props.showAlert("success","Changed to Lowercase");

  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

//  const [fWord, findWord] = useState("");
// const [rWord, replaceWord] = useState("");
// Function : 
// const handlefindChange = (event) => {
//     findWord(event.target.value);
//   };
//   const handleReplaceChange = (event) => {
//   console.log(replaceWord(event.target.value)) ;
//   };
//   const handleReplaceClick = () => {
//     let newText = text.replaceAll(fWord,rWord);
//     setText(newText);
//   };
// TextArea  Of Find Words: 
//           value={fWord}
//           onChange = {handleFindChange}
// TextArea Of Replace Words :
//           value={rWord}
//           onChange = {handleReplaceChange}
// add event on button  : 
//           onclick = {handleReplaceClick}


  const [text, setText] = useState("");
  // text="Hell"; ->error
  // setText(text + "HELL"); //--> ye bhi error de raha hai
  // setText("HELL"); //--> ye bhi error de raha hai


  const handleClear= ()=>{
    setText("");
  }
  return (
    <>
      <div>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            value={text} //My state
            onChange={handleOnChange} // handling event -- orelse wont be able to type
            className="form-control"
            id="myBox"
            rows="8"
            placeholder="Enter your text here"
          ></textarea>
        </div>

        <button className="btn-primary btn" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn-primary btn mx-2" onClick={handleLowClick}>
          Convert to lowercase
        </button>

        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">
          Speak
        </button>
        <button type="submit" onClick={handleClear} className="btn btn-success mx-2 my-2">
          Clear
        </button>
        
      </div>

      <div className="container my-5">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words,{text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter Something to preview"}</p>
      </div>
      {/* <Navbar></Navbar> */}
    </>
  );
}
