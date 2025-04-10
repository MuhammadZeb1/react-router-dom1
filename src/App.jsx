import { Link, Navigate, Route, Routes } from "react-router"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import Navbar from "./Navbar"

function App() {
  

  return (
    <>
    <h1 className="bg-amber-700">jjj</h1>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      {/* <Route path="/*" element={<h1>4040</h1> */}
      <Route path="/*" element={<Navigate to="/login"/> }/>
    </Routes>
     <h1>helll</h1>
    </>
  )
}

export default App
