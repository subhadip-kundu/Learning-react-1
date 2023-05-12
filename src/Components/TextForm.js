import React, { useState } from "react";


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleUpClickTolowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    // const handleUpClickToCapitalize = () => {
    //     let newText = text;
    //     setText(newText);
    // }
    const handleUpClickToclear = () => {
        setText('');
    }

    const handleOnChange = (event) => {
        console.log("Done");
        setText(event.target.value);
    }

   

    const [text, setText] = useState('');
    return (
        <>

            <div>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">{props.lebel}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="4"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleUpClickTolowercase}>Convert to Lowercse</button>
                {/* <button className="btn btn-primary mx-3" onClick={handleUpClickToCapitalize}>Convert to Capitalize</button> */}
                <button className="btn btn-primary " onClick={handleUpClickToclear}>Clear</button>
            </div>
            <div className="container my-4">
                <h1>The text summary</h1>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{text.split(" ").length *0.01} Minutes to read</p>
            </div>
        </>
    )
}



