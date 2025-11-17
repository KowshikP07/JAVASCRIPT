import React from 'react'
import '../css/Form.css'
const IndexForm = () => {
    const handlesubmit=()=>{
        console.log("submitted")
    }
  return (
    <div className="formdiv">
    <form onSubmit={handlesubmit} className="main_form">
        <input type="text"/>
        <input type="email" name="email" id="email"/>
        <input type="number" name="num" id="num" />
        <input type="password" name="pass" id="pass" />
        <button>Submit</button>        
    </form>
    </div>
  )
}

export default IndexForm
