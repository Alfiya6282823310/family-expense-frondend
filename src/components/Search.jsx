import React from 'react'

const Search = () => {
  return (
    <div>
<div className="container">
    <div className="row g-3 ">
        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Month: </label>
<select name="month" id="" className="form-control">
                                    <option value="sel">--select--</option>
                                    <option value="jan">January</option>
                                    <option value="feb">February</option>
                                    <option value="mar">March</option>
                                    <option value="apr">April</option>
                                    <option value="may">May</option>
                                    <option value="jun">June</option>
                                    <option value="jul">July</option>
                                    <option value="aug">August</option>
                                    <option value="sept">September</option>
                                    <option value="oct">October</option>
                                    <option value="nov">November</option>
                                    <option value="dec">December</option>
                                </select>

        </div>
        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Year: </label>
        <select name="year" id="" className="form-control">
                                    <option value="select">--select--</option>
                                    <option value="y">2023</option>
                                    <option value="y1">2024</option>
                                    <option value="y2">2025</option>
                                    <option value="y3">2026</option>
                                    <option value="yo">others</option>
                                </select>

        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <button className="btn btn-info">Search</button>

        </div>
    </div>
</div>

    </div>
  )
}

export default Search