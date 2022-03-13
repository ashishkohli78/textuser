import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        console.log(Text)
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","Success")
    }
    const handleDownpClick = () => {
        let newText1 = Text.toLowerCase();
        setText(newText1)
        props.showAlert("converted to Lowercase","Success")

    }
    const handleClrClick = () => {
        let newText1 = '';
        setText(newText1)
        props.showAlert("Cleared","Success")

    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(Text);
        props.showAlert("Text Copied","Success")

    }

    const [Text, setText] = useState("Enter text here")

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={Text} onChange={handleOnChange} id='mybox' rows="6"></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleUpClick} >Convert to Uppercase</button> <button className='btn btn-primary mx-1' onClick={handleDownpClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handleClrClick}>Clear</button>
                <button className='btn btn-primary m-1' onClick={handleCopy}>Copy</button>
            </div>
            <hr />
            <div className='container my-3'>
                <h1>Your Text Summary</h1>
                <p>{Text.split(" ").filter((e)=>{return e.length!==0}).length} Words and {Text.length} Characters</p>
                <hr />
                <h3>Preview</h3>
                <p>{Text.length>0?Text:"Nothing to Preview"}</p>
            </div>
        </>
    )
}
