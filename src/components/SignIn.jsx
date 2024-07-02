import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const SignIn = () => {
  const [data,setData]=useState(
    {
        "username":"",
        "password":""
       

    }
)
const inputHandler=(event)=>{
   setData ({...data,[event.target.name]:event.target.value})
}
const navigate=useNavigate();
const handleSubmit=async(event)=>{
    event.preventDefault()
    console.log(data)
      axios.post("http://localhost:8080/signin", data).then((response) => {
          console.log(response.data) 
          if(response.data.status === "success") {
          localStorage.setItem('token',response.data.token)
          localStorage.setItem('username',data.username)
          navigate('/home')
      } else {
          alert("Error")
      }

  }).catch (
    (error)=>{
        console.log(error.message)
        alert(error.message)
    }
  ) 
  }

  return (
    <div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    <center>
        
    <div className="container">
        <div className="row">
            <form onSubmit={handleSubmit}>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">USERNAME</label>
                <input type="text" placeholder="Enter your user name" className="form-control" name='username' value={data.username} onChange={inputHandler} required/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">PASSWORD</label>
                <input type="password" name="password" placeholder='Enter your password' id="" className="form-control" value={data.password} onChange={inputHandler} required/>
            </div>
            <div><br></br></div>
            
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" type='submit'>SIGN IN</button>
            </div>
            <Link to="/signup">forgot password?</Link>
            <div><br></br></div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               Create a new account <Link to="/signup">SIGN UP</Link>
            </div>
            </form>
        </div>
    </div>
    </center>
</div>
   </div>
  )
}

export default SignIn