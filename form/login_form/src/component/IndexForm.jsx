import React from 'react'
import '../css/Form.css'
const IndexForm = () => {
    const handlesubmit = () => {
        console.log("submitted")
    }
    return (
        <div className="formdiv">
            <form onSubmit={handlesubmit} className="main_form">
                <div className="name in">
                    <span className='title'>Username</span>
                    <input type="text" />
                    <span className='error'></span>
                </div>
                <div className="email in">
                    <span className='title'>email</span>
                    <input type="email" name="email" id="email" />
                    <span className='error'></span>
                </div>
                <div className="password in">
                    <span className='title'>Password</span>
                    <input type="password" name="pass" id="pass" />
                    <span className='error'></span>
                </div>
                <div className="confirmpass in">
                    <span className='title'>Confirm Password</span>
                    <input type="password" name="pass" id="pass" />
                    <span className='error'></span>
                </div>
                <button className='submit'>Submit</button>
            </form>
        </div>
    )
}

export default IndexForm
