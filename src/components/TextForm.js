import React, { useState } from "react";

export default function (props) {
  const handleUpClick = () => {
    console.log("UpperCase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("UpperCase", "success");
  };
  const handleLoClick = () => {
    console.log("lowerCase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("LowerCase", "success");
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text", "success");
  };
  const handleRemoveIs = () => {
    let newText = text.replaceAll("is", "IS");
    setText(newText);
    props.showAlert("Removed IS", "success");
  };
  const handleOnChange = (event) => {
    console.log("Handle On Change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copy The Text", "success");
  };
  const RemoveExtraSpaces = () => {
    let word = text.replace(/\s+/g, " ").trim();
    setText(word);
    props.showAlert("Removed Extra Spaces", "success");
  };
  const [text, setText] = useState("");
  // text = "New Text"   wrong way t enter the text
  // setText("New Text");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2 className="my-4">{props.title}</h2>
        <div className="mb-3 ">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="my-box"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#003366",
              color: props.mode === "light" ? "black" : "white",
            }}
            rows="5"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearText}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRemoveIs}>
          Remove Is
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={RemoveExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p> {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read character</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
