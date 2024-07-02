
import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick = () =>{
        console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);

    } 

    const handleLoClick = () =>{
        console.log("Lowercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);

    }

    const handleClearText = () =>{
        console.log("Clear Text was Clicked" + text);
        let newText = "";
        setText(newText);

    }


    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);

    } 

    const handleCopyText = () =>{
        console.log("Copy Text was clicked")
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    } 

    const handleRemoveSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    } 

    const [text, setText] = useState('');  
  return (
      <div>
        <div className="container" style = {{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white' }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleRemoveSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-5" style = {{color: props.mode==='light'?'black':'white'}}>
            <h2>Your text summary:</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p><b>Average Read Time:</b> {0.008 * (text.split(" ").length)} minutes or {0.008 * (text.split(" ").length) * 60} seconds</p>
            <h2>Preview :</h2>
            <p>{text.length>0?text:"Enter your Text please."}</p>
        </div>
      </div>
   )
}
