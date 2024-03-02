import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event) =>{
    setText(event.target.value);
  }
  const handleDownClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleclearClick = () =>{
    let newText ='';
    setText(newText);
  }
  const handleBoldClick = () =>{
    let newText = text.concat(" apple");
    setText(newText);
  }

  const [text,setText]=useState('');
  return (
    <>
    <div style={{ color :props.mode==='dark'||props.mode==='primary'?'white':'black'}}>
      <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text}id="exampleFormControlTextarea1" style={{ backgroundColor: props.mode ==='dark'||props.mode==='primary'?'#8f9ac5':'white', color :props.mode==='dark'?'white':'black'}} rows="7" onChange={handleOnChange}></textarea>
        </div>
        <button className={`btn btn-${props.mode==='dark'||props.mode==='primary'?'warning':'primary'} mx-2`} onClick={handleUpClick}>Convert to UPPER Case</button>
        <button className={`btn btn-${props.mode==='dark'||props.mode==='primary'?'success':'primary'} mx-2`} onClick={handleDownClick}>Convert to lower Case</button>
        <button className={`btn btn-${props.mode==='dark'||props.mode==='primary'?'light':'primary'} mx-2`} onClick={handleclearClick}>Clear text</button>
        <button className={`btn btn-${props.mode==='dark'||props.mode==='primary'?'danger':'primary'} mx-2`} onClick={handleBoldClick}>concat apple</button>
    </div>
    <div className="container" style={{ color :props.mode==='dark'||props.mode==='primary'?'white':'black' }}>
      <h2 className='my-2'>YOUR TEXT SUMMARY</h2>
      <p> <strong>{text.split(" ").length-1}</strong> words and <b>{text.length}</b> character</p>
      <p>paragraph = <strong>{text.split("\n").length}  </strong></p>
      <p> it takes approx <b> {0.0008* text.split("").length}</b> minutes to read</p>
      <h2>PREVIEW</h2>
      <p><em>{text.length>0?text:"Enter some thing to Preview it here"}</em></p>
    </div>
    </>
  )
}
