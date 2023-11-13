import { useEffect, useState } from "react";
import "./App.css";
import Chart from "./chart/Chart";
import polarNRZ_I from './algorithms/polarNRZ_I'
import polarRZ from "./algorithms/polarRZ";
import polarNRZ_L from "./algorithms/polarNRZ_L";
import polarManchester from "./algorithms/polarManchester";
import bipolarAMI from "./algorithms/bipolarAMI";
import bipolarPseudoternary from "./algorithms/bipolarPseudoternary";

function App() {
  const [showChart, setShowChart] = useState(false);
  const [resData, setResData] = useState([])
  const [hasSecondSignal, setHasSecondSignal] = useState(null)
  const [disabledButton, setDisabledButton] = useState(true)

  


  const changeInput = () => {
    let inputValue = document.getElementById('num').value.replace(/\s/g, "");
    return inputValue = inputValue.split('').map(function(n) {return Number(n)});
  } 

  const handleClickPolarNRZ_I = () => {
    const res = polarNRZ_I(changeInput())
    setResData([...res])
    setHasSecondSignal(false)
  };
  
  const handleClickPolarRZ = () => {
    const res = polarRZ(changeInput())
    setResData([...res])
    setHasSecondSignal(true)
  }

  const handleClickPolarNRZ_L = () => {
    const res = polarNRZ_L(changeInput())
    setResData([...res])
    setHasSecondSignal(false)
  }

  const handleClickpolarManchester = () => {
    const res = polarManchester(changeInput())
    setResData([...res])
    setHasSecondSignal(true)
  }

  const handleClickbipolarAMI = () => {
    const res = bipolarAMI(changeInput())
    setResData([...res])
    setHasSecondSignal(false)
  }

  const handleClickbipolarPseudoternary = () => {
    const res = bipolarPseudoternary(changeInput())
    setResData([...res])
    setHasSecondSignal(false)
  }

  const handleChange = (e) => {
    e.target.value = e.target.value.replace(/[^0-1]/g, '').replace(/(.{4})/g, '$1 ').trim();
    if(e.target.value.length > 0){
      setDisabledButton(false)
    }else{
      setDisabledButton(true)
    }
  }

  






  return (
    <div className="App">
      <h2>Lütfen 0 ve 1 lerden oluşan değer giriniz.</h2>
      <input onChange={(e)=>handleChange(e)} id="num" type="text" min="0" max="1" name="num" maxlength="14" />
      <div className="buttons">
        <button disabled={disabledButton} onClick={handleClickPolarNRZ_I}>polarNRZ_I</button>
        <button disabled={disabledButton} onClick={handleClickPolarRZ}>polarRZ </button>
        <button disabled={disabledButton} onClick={handleClickPolarNRZ_L}>polarNRZ_L </button>
        <button disabled={disabledButton} onClick={handleClickpolarManchester}>polarManchester </button>
        <button disabled={disabledButton} onClick={handleClickbipolarAMI}>bipolarAMI </button>
        <button disabled={disabledButton} onClick={handleClickbipolarPseudoternary}>bipolarPseudoternary </button>
      </div>
      <div className="chart-container"><Chart resData={resData} hasSecondSignal={hasSecondSignal}/></div>
    </div>
  );
}

export default App;
