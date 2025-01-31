import './App.css'
import {  Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Landingpg from './Pages/Landingpg.jsx';
import Aboutpg from "./Pages/Aboutpg.jsx";
import Skillspg from "./Pages/Skillspg.jsx";
import Servicespg from "./Pages/Servicepg.jsx";
import Portfoliopg from "./Pages/Portfoliopg.jsx";
import Contactpg from "./Pages/Contactpg.jsx";

function App() {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landingpg/>} />
        <Route path="/Aboutpg" element={<Aboutpg />} />
        <Route path="/Skillspg" element={<Skillspg />} />
        <Route path="/Servicespg" element={<Servicespg />} />
        <Route path="/Portfoliopg" element={<Portfoliopg />} />
        <Route path="/Contactpg" element={<Contactpg />} />
      </Routes>
      </div>
  )
}

export default App
