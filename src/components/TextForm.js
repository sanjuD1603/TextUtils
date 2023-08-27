import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter the text here');

    const handleUpClick = () =>
    {
        console.log("upper case was clicked  "  + text);
        const newText = text.toLocaleUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) =>
    {
        console.log("on change  ");
        setText(event.target.value);
       
    }



  return (
    <div>
   


<h1>{props.heading}</h1>

<div className="mb-3">
    <textarea name="form-control"  value={text}   onChange={handleOnChange} id="" cols="30" rows="10"></textarea>
</div>

<button className="btn btn-primary"  onClick={handleUpClick}>Convert to Upper case</button>
</div>
  )
}

