import { Link, Navigate, Route, Routes } from "react-router"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import Navbar from "./Navbar"
import College from "./College"
import Class from "./Class"
import Class2 from "./Class2"
import Users from "./Users"
import UserDeatails from "./UserDeatails"

function App() {
  

  return (
    <>
    <h1 className="bg-amber-700">jjj</h1>
  {/* <Navbar/> */}
    <Routes>
      <Route element={<Navbar/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/users/:id" element={<UserDeatails/>}/>
      </Route>
      <Route path="/college" element={<College/>}>
      <Route index element={<Class/>}/>
      <Route path="class2" element={<Class2/>}/>
      </Route>
      {/* <Route path="/*" element={<h1>4040</h1> */}
      <Route path="/*" element={<Navigate to="/login"/> }/>
    </Routes>
     <h1>helll</h1>
    </>
  )
}

export default App
