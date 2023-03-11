import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import AddEmp from "./components/AddEmp";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={< Home />} />
          <Route exact path='/add' element={< AddEmp />} />
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
