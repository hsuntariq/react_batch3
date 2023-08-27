import React from 'react'
import { useState } from 'react';

const Form = () => {
const[name,setName] = useState('');
const [lName,setLName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [confirmPassword,setConfirmPassword] = useState('');


const handleClick = (e) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setPassword('');
    const userData = {
        name,email,password
    }
    console.log(userData)
}
return (
<>
    <div className="container col-lg-5 p-4 rounded mx-auto shadow mt-4">
        <form>
            <label>First Name</label>
            <input 
            type="text"
            placeholder='Please enter your name'
            className="form-control my-2"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <label>Last Name</label>
            <input 
            type="text"
            placeholder='Please enter your name'
            className="form-control my-2"
            value={lName}
            onChange={(e)=>setLName(e.target.value)}
            />
            <label>Email</label>
            <input 
            type="email" 
            placeholder='Please enter your email' 
            className="form-control my-2" 
            value={email}
            onChange = {(e)=>setEmail(e.target.value)}
            />
            <label>Password</label>
            <input type="password" 
            placeholder='Please enter your password' 
            className="form-control my-2" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <label>Conform password</label>
            <input type="password" 
            placeholder='Please enter your password' 
            className="form-control my-2" 
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            />
            <button onClick={handleClick} className="btn btn-dark my-2 w-100">
                Add Fields
            </button>
        </form>
    </div>
</>
)
}

export default Form