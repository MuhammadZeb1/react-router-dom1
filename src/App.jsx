import { Link, Route, Routes } from "react-router"
import Home from "./Home"
import About from "./About"

function App() {
  

  return (
    <>
    <Link to="/">home</Link>
    <br />
    <Link to="/about">about</Link>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
     <h1>helll</h1>
    </>
  )
}

export default App
