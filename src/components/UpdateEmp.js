import React,{useState, useRef} from 'react'



const UpdateEmp = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const ref = useRef(null);
    const refClose = useRef(null);
    const refId = useRef(null)
    const editEmp = async(e) => {
        console.log(e.target.value);
         let id = e.target.value;
       
        
          // const headers = {
          //     'Acces-Control-Allow-Origin': '*'
          // }
        //   async function upEmp() {
        //     const emp = {      
        //     name,
        //     age,
        //     email,
        //     phone,
        //     gender,
        //   } 
        //   const req = await axios.put(`api/employee/updateEmployee/${id}`,emp)
        //   console.log(req.data)
        // }
        // upEmp()
       
      }
  return (
    
    <div>
        {/* Button trigger modal */}
        <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      ref={ref}
                     
                      onClick={editEmp}
                      
                    >
                      Edit
                    </button>
                    {/* Modal */}
         <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Edit Employee
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <form className="container">
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Enter Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="ename"
                                  name="ename"
                                  placeholder="XYZ"
                                  // value={emp.ename}
                                
                                  // onChange={(e) => setName(e.target.value)}
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Age
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="eage"
                                  name="eage"
                                  placeholder="21"
                                //   value={emp.eage}
                                  onChange={(e) => setAge(e.target.value)}
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Phone
                                </label>
                                <input
                                  type="tel"
                                  className="form-control"
                                  id="ephone"
                                  name="ephone"
                                  placeholder="1234567890"
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Email address
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="eemail"
                                  name="eemail"
                                  placeholder="name@example.com"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                              <div className="form-floating mb-3">
                                <select
                                  className="form-select"
                                  id="egender"
                                  name="egender"
                                  aria-label="Floating label select example"
                                  value={gender}
                                  onChange={(e) => setGender(e.target.value)}
                                >
                                  <option selected>
                                    Open this select menu
                                  </option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Prefer Not to Say">
                                    Prefer Not to Say
                                  </option>
                                </select>
                                <label htmlFor="floatingSelect">Gender</label>
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                              ref={refClose}
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onSubmit={editEmp}
                             
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
    </div>
  )
}

export default UpdateEmp