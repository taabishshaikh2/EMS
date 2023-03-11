import axios from '../axios';
import React, { useState } from "react";
import { useStateValue } from '../context/EmpContext';


const AddEmp = () => {
  const [{}, dispatch] = useStateValue()
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, age, phone, email, gender);
    setName("");
    setAge("");
    setEmail("");
    setPhone("");
    setGender("");
    async function addEmp() {
      // const headers = {
      //     'Acces-Control-Allow-Origin': '*'
      // }
      const emp = {      
        name,
        age,
        email,
        phone,
        gender,
      } 
      const req = await axios.post(`api/employee/addEmployee`,emp)
      console.log(req.data)
      // dispatch({
      //   type: 'ADD_EMPLOYEE',
      //   payload:emp
        
      // })
  }
  addEmp() 
}
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Enter Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name='name'
          placeholder="XYZ"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Age
        </label>
        <input
          type="number"
          className="form-control"
          id="age" name='age'
          placeholder="21"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Phone
        </label>
        <input
          type="tel"
          className="form-control"
          id="phone" name='phone'
          placeholder="1234567890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email" name='email'
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-floating mb-3">
        <select
          className="form-select"
          id="gender" name='gender'
          aria-label="Floating label select example"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option selected>Open this select menu</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Prefer Not to Say">
            Prefer Not to Say
          </option>
        </select>
        <label htmlFor="floatingSelect">Gender</label>
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">
          Add Employee
        </button>
      </div>
    </form>
  );
};

export default AddEmp;
