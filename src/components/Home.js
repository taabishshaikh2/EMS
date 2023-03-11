import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useStateValue } from "../context/EmpContext";
import UpdateEmp from "./UpdateEmp";

// https://firestore.googleapis.com/v1/projects/ems-react-855a0//databases/(default)/employees/fields/
const Home = () => {
  // const [empData, setEmpData] = useState([]);
  const [{employees}, dispatch] = useStateValue()

  // const [emp, setEmp] = useState({ename: "", eage: "", eemail: "", ephone: "", egender: ""})
 


  useEffect(() => {
    async function getEmp() {
      // const headers = {
      //     'Acces-Control-Allow-Origin': '*'
      // }
      const request = await axios.get(`api/employee/fetchallemployees`);
      console.log(request.data);
      dispatch({
        type: "GET_EMPLOYEE",
        payload: request.data
      })
      // setEmpData(request.data);
    }
    getEmp();
  }, [dispatch]);

  const deleteEmp = async (e) => {
    console.log(e.target.value);
    let id = e.target.value;
    
    const request = await axios.delete(`api/employee/deleteEmployee/${id}`);
    console.log(request.data);
    dispatch({
      type: "DELETE_EMPLOYEE",
      id: id
    })
  
  };
 

  




  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => {
            return (
              <tr key={emp._id}>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.phone}</td>
                <td>{emp.email}</td>
                <td>{emp.gender}</td>
                <td className="d-flex justify-content-center">
                  <button
                    type="button"
                    onClick={deleteEmp}
                    value={emp._id}
                    className="btn btn-danger mx-1"
                  >
                    Delete
                  </button>
                  <div>
                    <UpdateEmp/>
                   
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
