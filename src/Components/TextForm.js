import React, { useState } from "react";


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    }
    const handleUpClickTolowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success")
    }
    const handleUpClickToRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra space removed!", "success");
    }
    const handleUpClickToclear = () => {
        setText('');
        props.showAlert("Textarea Cleared!", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClickTocopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Textarea Copied!", "success");
    }


    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? '#fff' : '#051b3c' }}>
                <div>
                    <div className="mb-3">
                        <label htmlFor="myBox" className="form-label">{props.heading}</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#415d89' : '#fff', color: props.mode === 'dark' ? '#fff' : '#083b6e' }} rows="7"></textarea>
                    </div>
                    <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-3" onClick={handleUpClickTolowercase}>Convert to Lowercse</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-3" onClick={handleUpClickToRemoveSpace}>Remove extra space</button>
                    <button disabled={text.length === 0} className="btn btn-primary" id="myBox" onClick={handleUpClickTocopy}>Copy</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-3" onClick={handleUpClickToclear}>Clear</button>
                </div>
                <div className="container my-4">
                    <h1>The text summary</h1>
                    <p>{text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length} words and {text.length} characters</p>
                    <p>{(text.split(" ").length - 1) * 0.01} Minutes to read</p>
                </div></div>
        </>
    )
}






