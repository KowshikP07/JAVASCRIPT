import React, { useState } from 'react'
import '../css/Form.css'
const IndexForm = () => {
    const [userfrom,setForm]=useState({name:"",email:"",pass:"",conpass:""})
    const [errors,seterrors]=useState({})
    const Validate=()=>{
        let typeerror={}
        if(userfrom.name.trim()==="") typeerror.name="enter the name"
        if(!userfrom.email.includes("@")) typeerror.email="enter the email"
        if(userfrom.pass.length<6) typeerror.pass="enter the password"
        if(userfrom.pass!==userfrom.conpass) typeerror.conpass="password is incorrect"
        seterrors(typeerror)
        return Object.keys(typeerror).length===0
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        if(Validate()){
            window.alert("form is submitted")
        }
        console.log("submitted")
        setForm({name:"",email:"",pass:"",conpass:""})
    }
    const handlechange=(e)=>{
        setForm({...userfrom,[e.target.name]:e.target.value})
    }
    return (
        <div className="formdiv">
            <form onSubmit={(e)=>handlesubmit(e)} className="main_form">
                <div className="name in">
                    <span className='title'>Username</span>
                    <input type="text" name="name" value={userfrom.name} onChange={(e)=>handlechange(e)}/>
                    <span className='error'>{errors.name?errors.name:""}</span>
                </div>
                <div className="email in">
                    <span className='title'>email</span>
                    <input type="email" name="email" id="email" value={userfrom.email} onChange={(e)=>handlechange(e)}/>
                    <span className='error'>{errors.email?errors.email:""}</span>
                </div>
                <div className="password in">
                    <span className='title'>Password</span>
                    <input type="password" name="pass" id="pass" value={userfrom.pass} onChange={(e)=>handlechange(e)}/>
                    <span className='error'>{errors.pass?errors.pass:""}</span>
                </div>
                <div className="confirmpass in">
                    <span className='title'>Confirm Password</span>
                    <input type="password" name="conpass" id="pass1" value={userfrom.conpass} onChange={(e)=>handlechange(e)}/>
                    <span className='error'>{errors.conpass?errors.conpass:""}</span>
                </div>
                <button className='submit'>Submit</button>
            </form>
        </div>
    )
}

export default IndexForm
