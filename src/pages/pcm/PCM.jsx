import React, { useEffect, useState } from 'react'
import PCMchart from './PCMchart'

const PCM = () => {

  const [showCharts,setShowCharts] = useState(true)
  const [numbers, setNumbers ] = useState([])
  const [inputValue, setInputValue] = useState('');


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




  return (
    <>
        <div className='delta-header'>
    <h2> Delta Module </h2>
    <h3>Genlik değerleri giriniz.</h3>
    <div className='input-container'>
        <input onChange={(e)=>handleChange(e)} type="number" value={inputValue} />
        <button onClick={handleClick} className='input-button'>Ekle</button>
    </div>
        <button className='toggle-chart'>Show Charts</button>
        
    </div>
      <PCMchart numbers={numbers} ></PCMchart>
    </>
  )
}

export default PCM