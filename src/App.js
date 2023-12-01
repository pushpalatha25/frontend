import React from 'react'
import {Link, Route,Routes} from "react-router-dom"
import Login from "./components/login";
import About from "./components/About";
import CollegeComplaintSystem from './components/complaint';
import SignUp from "./components/signup"
const App = () => {
  return (
    <div>
       <h1>SHRIDEVI INSTITUTION OF TECHNOLOGY</h1>
       <ul>
    <li><Link to="/About">About</Link></li>
    <li><Link to="/complaint">Complaint</Link></li>
    <li><Link to="/SignUp">Sign Up</Link></li>
    <li><Link to="/login">Login</Link></li>
  </ul>



          <Routes>
            
          <Route path= "/About" element={<About />}/>
          <Route path= "/complaint" element={<CollegeComplaintSystem />}/>
          <Route path= "/SignUp" element={<SignUp />}/>
          <Route path= "/login" element={<Login />}/>
          </Routes> 


    </div>
  )
}

export default App
