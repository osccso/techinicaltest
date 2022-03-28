import { BrowserRouter as Router, Navigate, Routes ,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import UsersList from "./components/UsersList";



function App() {
  return (
  <Router>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="lists" element={<UsersList/>}/>
        <Route path="/*" element={<Navigate to = {"/"}/>}/>
      </Routes>
  </Router>
  );
}


export default App;
