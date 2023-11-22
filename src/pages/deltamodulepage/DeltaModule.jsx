import React, { useEffect, useState } from 'react';
import '../../App.css'
import TopChart from './TopChart';
import BottomChart from './BottomChart';
import FDeltaModule from '../../algorithms/deltaModule/DeltaModule';





const DeltaModule = () => {

    const [showCharts,setShowCharts] = useState(true)
    const [numbers, setNumbers ] = useState([])
    const [inputValue, setInputValue] = useState('');
    const [res, setRes] = useState([])
    const [bits, setBits] = useState([])

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleClick = () => {
        if (!isNaN(inputValue) && inputValue !== '') {
            setNumbers((prevNumbers) => [...prevNumbers, Number(inputValue)]);
            setInputValue(''); // Input değerini temizle
          } else {
            alert('Lütfen geçerli bir sayı girin!');
          }
    }
    const toggleChart = () => {
        let { bits, result } = FDeltaModule(numbers)
        setRes(result)
        setBits(bits)
    }

    useEffect(()=>{
        console.log(res)
    },[res])

  return (
    <>
    <div className='delta-header'>
    <h2> Delta Module </h2>
    <h3>Genlik değerleri giriniz.</h3>
    <div className='input-container'>
        <input onChange={(e)=>handleChange(e)} type="number" />
        <button onClick={handleClick} className='input-button'>Ekle</button>
    </div>
        <button onClick={toggleChart} className='toggle-chart'>Show Charts</button>
        <p style={{fontSize:"24px"}}>Çıktı Bitleri: {bits && bits.map(item=> item+ " ")} </p>    
    </div>
       <>
        <TopChart res={res}></TopChart>
        <BottomChart res={res} ></BottomChart>
       </> 
      
    </>

  );
};

export default DeltaModule;
