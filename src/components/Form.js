import React, { useState } from "react";

function Form(props) {
  const [text, setText] = useState("");
  const convertUpCase = () => {
    setText(text.toUpperCase());
    props.showAl("Converted to upper text", "success")
  };
  const convertLoCase = () => {
    setText(text.toLowerCase());
    props.showAl("Converted to lower text", "success")
  };
  const clearscr = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleOnCopy = () => {
    let text = document.querySelector("#myBox");
    navigator.clipboard.writeText(text.value);
    props.showAl("Text Copied", "success")
  };

  return (
    <>
      <div className="mb-3 mt-4" style={{color: props.mode === "dark" ? "white" : "#5A4FCF"}}>
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          id="myBox"
          style={{
            backgroundColor: props.mode === "dark" ? "#5A4FCF" : "white",
            color: props.mode === "dark" ? "white" : "#5A4FCF",
          }}
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button 
        disabled = {text.length === 0}
        type="button"
        className="btn btn-dark mx-2"
        onClick={convertUpCase}
      >
        Convert to UpperCase
      </button>
      <button
        disabled = {text.length === 0}
        type="button"
        className="btn btn-dark mx-2"
        onClick={convertLoCase}
      >
        Convert to LowerCase
      </button>
      <button disabled = {text.length === 0} type="button" className="btn btn-dark mx-2" onClick={clearscr}>
        Clear Text
      </button>
      <button
        disabled = {text.length === 0}
        type="button"
        className="btn btn-dark mx-2"
        onClick={handleOnCopy}
      >
        Copy Text
      </button>
      <div style={{color: props.mode === "dark" ? "white" : "#5A4FCF"}}>
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").filter((e)=>{return e.length !== 0}).length} words and {text.length} characters
        </p>
      </div>
      <div  style={{color: props.mode === "dark" ? "white" : "#5A4FCF"}}> 
        <h2>Preview your Text</h2>
        <p>{text.length > 0 ? text : "Nothing to preview! Enter something to preview"}</p>
      </div>
    </>
  );
}

export default Form;
