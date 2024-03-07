import React,{useState} from 'react'

export default function TextForm(props) {
    const upcase=()=>{
        var uptxt=text.toUpperCase()
        setText(uptxt)
    }

    const change=(event)=>{
        console.log("done")
        setText(event.target.value)
    }
    const [text,setText]=useState("")
  return (<>
        <div style={{color:props.mode==='light'?'black':'white'}}>
            <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="mybox"value={text} onChange={change} rows="8" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'grey' }}></textarea>
            </div>
            <button className="btn btn-primary" onClick={upcase}>Uppercase</button>
        </div>
        <div style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p>No. of word {text.split(" ").length }, No. of characters {text.length}</p>
        </div>
        </>
  )
}
