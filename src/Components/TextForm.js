import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase was Clickecd" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.ShowAlert("UpperCase is applied","success");
  }
  const handleLoClick = () => {
    console.log("lowerCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.ShowAlert("LowerCase is applied","success");
  }
  const handletoClear = () => {
    console.log("Clear was Clicked" + text);
    let newText = " ";
    setText(newText);
    props.ShowAlert("Clear Text is applied","success");
  }
  const handletoLLoCase = (str) => {
    console.log("localeLo was Clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.ShowAlert("LocaleLowerCase is applied","success");
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  return ( 
  
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handletoClear}>Clear Text </button>
        <button className="btn btn-primary mx-2" onClick={handletoLLoCase}>Change to localeLow </button>
        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          <h1> Your Text Summary</h1>
        </div>
        <p> {text.split(" ").length} words,{text.length}Characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:'Enter Your text to preview'}</p>
     </div>
     

  )
}