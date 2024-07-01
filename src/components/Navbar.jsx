import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
    <Link class="navbar-brand">
    <img src="https://tse2.mm.bing.net/th?id=OIP.3AMgj7LY0xSRf0o_Av9DawHaHa&pid=Api&P=0&h=220" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
      Expense Tracker</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">
          <img src="https://tse4.mm.bing.net/th?id=OIP.WnK1vJs2BjGqyaFWdwdwiwHaHa&pid=Api&P=0&h=220" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
            Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#"><img src="https://tse2.mm.bing.net/th?id=OIP.UEvGLS_dvg5bZJTwSyZrZgAAAA&pid=Api&P=0&h=220" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>Add Expense</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://tse2.mm.bing.net/th?id=OIP.kc38xqXNsN6wZRq6_cFNUAHaHa&pid=Api&P=0&h=220" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
            View Expense
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="#">Datewise search</Link></li>
            <li><Link class="dropdown-item" to="#">Monthwise search</Link></li>
            
            <li><Link class="dropdown-item" to="#">Yearly Search</Link></li>
          </ul>
        </li>

      </ul>
      
      <li class="nav-item dropdown">
          <a class="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://tse1.mm.bing.net/th?id=OIP.mpXg7tyCFEecqgUsoW9eQwHaHk&pid=Api&P=0&h=220" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
            Profile
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Logout</a></li>
            <li><a class="dropdown-item" href="#">Edit Profile</a></li>
          </ul>
        </li>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
