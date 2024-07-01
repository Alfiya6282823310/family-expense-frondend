import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    <center>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">USERNAME</label>
                <input type="text" placeholder="Enter your user name" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">PASSWORD</label>
                <input type="password" name="" placeholder='Enter your password' id="" className="form-control" />
            </div>
            <div><br></br></div>
            
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success">SIGN IN</button>
            </div>
            <Link to="/signup">forgot password?</Link>
            <div><br></br></div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               Create a new account <Link to="/signup">SIGN UP</Link>
            </div>
        </div>
    </div>
    </center>
</div>
   </div>
  )
}

export default SignIn