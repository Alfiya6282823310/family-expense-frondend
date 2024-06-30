import React from 'react'

const Add = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="container">
    <div className="row g-3">
        <center><h1>Add Expense</h1></center>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Date</label>
            <input type="date" name="" id="" className="form-control" />
        </div><br></br>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Amount</label>
            <input type="text" placeholder='Enter Amount' className="form-control" />
        </div><br></br>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Category</label>
            <select name="" id="" className="form-control">
                <option value="">Health</option>
                <option value="">Education</option>
                <option value="">Clothing</option>
                <option value="">Grocery</option>
                <option value="">Food</option>
                <option value="">Home Utilities</option>
                <option value="">Transport</option>
                <option value="">Rent</option>
                <option value="">Gift</option>
                <option value="">Others</option>
            </select>
        </div><br></br>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">upload Bill</label>
            <input type="file" className="form-control" />
        </div><br></br>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Description</label>
            <input type="text" placeholder='Description' className="form-control" />
        </div><br>
        </br>
      <div className="row g-3">
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <button className="btn btn-primary">Add</button>
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <button className="btn btn-primary">Add More</button>
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