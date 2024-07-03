import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Add = () => {

const [data,setData]=useState(
    {
        
        "month":"",
        "year":"",
        "amount":"",
        "category":"",
        "bill":"",
        "description":""
    }
)
const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
}

const readvalue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/add",data).then((response)=>{
        console.log(response.data)
        if (response.data.status==="success") {
            alert("Sucessfully Added")
        } else {
            alert("Error")
        }
    }).catch(
        (error)=>{
            console.log(error.message)
            alert(error.message)
        }
    )
}
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="container">
    <div className="row g-3">
        <center><h1>Add Expense</h1></center>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Month</label>
            <select  id="" className="form-control" name='month' value={data.month} onChange={inputHandler} >
                <option value="--select--">--select--</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
        </div><br></br>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label" >Year</label>
            <select id="" className="form-control" name='year' value={data.year} onChange={inputHandler}>
                <option value="--select--">--select--</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="Others">Others</option>
            </select>
        </div><br></br>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Amount</label>
            <input type="text" placeholder='Enter Amount' className="form-control" name='amount' value={data.amount} onChange={inputHandler}/>
        </div><br></br>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label" >Category</label>
            <select id="" className="form-control" name='category' value={data.category} onChange={inputHandler}>
                <option value="--select--">--select--</option>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
                <option value="Clothing">Clothing</option>
                <option value="Grocery">Grocery</option>
                <option value="Food">Food</option>
                <option value="Home Utilities">Home Utilities</option>
                <option value="Transport">Transport</option>
                <option value="Rent">Rent</option>
                <option value="Gift">Gift</option>
                <option value="Others">Others</option>
            </select>
        </div><br></br>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">upload Bill</label>
            <input type="file" className="form-control" name='bill' value={data.bill} onChange={inputHandler}/>
        </div><br></br>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Description</label>
            <input type="text" placeholder='Description' className="form-control" name='description' value={data.description} onChange={inputHandler}/>
        </div><br>
        </br>
      <div className="row g-3">
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <button className="btn btn-primary" onClick={readvalue}>Add</button>
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <button className="btn btn-primary" onClick={readvalue}>Add More</button>
        </div>
      </div>      
    </div>
</div>

                </div>
            </div>
        </div>
    </div>
  )
}


export default Add