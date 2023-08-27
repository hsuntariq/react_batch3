import React from 'react'
import { useState } from 'react'

const ObjectState = () => {
    const [user,setUser] = useState({
        name:'Ali',email:'ali@mail.com',age:20
    })
    // destructure
    const {name,email,age} = user;

    // handle the click
    const changeName = () => {
        setUser({...user,name:'new Name',email:'newmail@mail.com'})
    }

  return (
    <>
        <div className="container text-center">
            <h1>Hello {name}</h1>
            <h4>Email:{email}</h4>
            <h6>Age:{age}</h6>
            <button onClick={changeName} className="btn btn-dark">
                Change Name
            </button>
        </div>
    </>
  )
}

export default ObjectState