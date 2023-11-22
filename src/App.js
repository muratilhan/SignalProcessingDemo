import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LineCoding from "./pages/LineCoding";
import Navbar from "./Navbar";
import DeltaModule from "./pages/deltamodulepage/DeltaModule";
import PCM from "./pages/pcm/PCM";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/linecoding" element={<LineCoding/>} />
          <Route path="/pcm" element={<PCM/>} />
          <Route path="/delta" element={<DeltaModule/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

//         <button disabled={disabledButton} onClick={handleClickPolarRZ}>polarRZ </button>

/*


*/
