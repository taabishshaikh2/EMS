import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div><nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary ">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">EMS</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Get Employees</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="add">Add Employee</Link>
          </li>
          
        </ul>
      
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar