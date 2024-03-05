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
    const [text,setText]=useState("def")
  return (<>
        <div>
            <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="mybox"value={text} onChange={change} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={upcase}>Uppercase</button>
        </div>
        <div>
            <h2>Your text summary</h2>
            <p>No. of word {text.split(" ").length }, No. of characters {text.length}</p>
        </div>
        </>
  )
}
