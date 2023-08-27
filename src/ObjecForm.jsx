import React from 'react'
import { useState } from 'react'

const ObjecForm = () => {
    const [formFields,setFormFields] = useState({
        name:'',l_name:'',email:'',password:'',c_password:''
    })

    const {name,l_name,email,password,c_password} = formFields;
    // handle the change
    const handleChange = (e) => {
        // const inputField = e.target.name;
        // const val = e.target.value;
        // // console.log(val)
        setFormFields((prevValue)=>({
            ...prevValue,
            [e.target.name] : e.target.value
        }
        )
            
        )
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
            name="name"
            value={name}
            onChange={handleChange}
            />
            <label>Last Name</label>
            <input 
            type="text"
            placeholder='Please enter your name' 
            className="form-control my-2"
            name="l_name"
            value={l_name}
            onChange={handleChange}
            />
            <label>Email</label>
            <input 
            type="email"
            placeholder='Please enter your email' 
            className="form-control my-2"
            name="email"
            value={email}
            onChange={handleChange}
            />
            <label>Password</label>
            <input 
            type="password"
            placeholder='Please enter your password' 
            className="form-control my-2"
            name="password"
            value={password}
            onChange={handleChange}
            />
            <label>Conform password</label>
            <input 
            type="password"
            placeholder='Please enter your password' 
            className="form-control my-2"
            name='c_password'
            value={c_password}
            onChange={handleChange}
            />
            <button  className="btn btn-dark my-2 w-100">
                Add Fields
            </button>
        </form>
    </div>
</>
)
}

export default ObjecForm