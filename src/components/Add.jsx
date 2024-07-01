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
            <label htmlFor="" className="form-label">Month</label>
            <select name="" id="" className="form-control">
                <option value="">--select--</option>
                <option value="">January</option>
                <option value="">February</option>
                <option value="">March</option>
                <option value="">April</option>
                <option value="">May</option>
                <option value="">June</option>
                <option value="">July</option>
                <option value="">August</option>
                <option value="">September</option>
                <option value="">October</option>
                <option value="">November</option>
                <option value="">December</option>
            </select>
        </div><br></br>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Year</label>
            <select name="" id="" className="form-control">
                <option value="">--select--</option>
                <option value="">2023</option>
                <option value="">2024</option>
                <option value="">2025</option>
                <option value="">2026</option>
                <option value="">2027</option>
                <option value="">2028</option>
                <option value="">2029</option>
                <option value="">2030</option>
                <option value="">Others</option>
            </select>
        </div><br></br>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Amount</label>
            <input type="text" placeholder='Enter Amount' className="form-control" />
        </div><br></br>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Category</label>
            <select name="" id="" className="form-control">
                <option value="">--select--</option>
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