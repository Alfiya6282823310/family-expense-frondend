import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Signup = () => {
  const [data,setData]=useState(
    {
        "fullname":"",
        "email":"",
        "username":"",
        "password":"",
        "confirmpassword":""
       

    }
)
const inputHandler=(event)=>{
   setData ({...data,[event.target.name]:event.target.value})
}
const handleSubmit=()=>{
    console.log(data)
    if (data.password==data.confirmpassword) {
      axios.post("http://localhost:8080/signup", data).then((response) => {
          console . log(data) 
          if(response.data.status == "success") {
          alert("successfully signed up")
      } else {
          alert("Error")
      }

  }).catch () 
  } else {
      alert("Password Incorrect")
  }
}
  return (
    <div>
    
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className=" g-3">
                  <center><h1>Sign Up</h1></center>

                  <br></br><center> 
                  <form onSubmit={handleSubmit}>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                       
                         <input type="text" className="form-control" name='fullname' placeholder='Full Name' value={data.fullname} onChange={inputHandler} required/>

                    </div>

                   <br></br> <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                           <input type="text" className="form-control" name='email' placeholder='Email' value={data.email} onChange={inputHandler} required/>

                    </div>

                    <br></br><div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    
                       <input type="text" className="form-control" name='username' placeholder='Username' value={data.username} onChange={inputHandler} required/>

                    </div>


                   <br></br> <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <input type="text" className="form-control" name='password' placeholder='Password' value={data.password} onChange={inputHandler} required/>

                    </div>

                   <br></br> <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <input type="text" className="form-control" name='confirmpassword' placeholder='Confirm Password' value={data.confirmpassword} onChange={inputHandler} required/>

                    </div>
                     <br></br>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                   <button className="btn btn-info" type='submit'>Signup</button>

                    </div>
                    <div><br></br></div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    Already have an account?<Link to='/'>Sign in</Link>

                    </div>
                    </form>
                    </center>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
