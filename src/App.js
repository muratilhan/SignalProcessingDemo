import { useEffect, useState } from "react";
import "./App.css";
import Chart from "./chart/Chart";
import FpolarNRZ_I from "./algorithms/polar/polarNRZ_I";
import polarRZ from "./algorithms/polarRZ";
import FpolarNRZ_L from "./algorithms/polar/polarNRZ_L";
import FpolarManchester from "./algorithms/polar/polarManchester";
import FbipolarAMI from "./algorithms/bipolar/bipolarAMI";
import FbipolarPseudoternary from "./algorithms/bipolar/bipolarPseudoternary";
import NRZ from "./algorithms/unipolar/NRZ";
import poo from "./algorithms/polar/polarNRZ_I";
import F2b1q from "./algorithms/multilevel/2b1q";

function App() {
  const [showChart, setShowChart] = useState(false);
  const [resData, setResData] = useState([]);
  const [hasSecondSignal, setHasSecondSignal] = useState(null);
  const [disabledButton, setDisabledButton] = useState(true);
  const [category, setCategory] = useState();
  const [activeClass, setActiveClass] = useState("");
  const [activeClassForChart, setActiveClassForChart] = useState("");

  const changeInput = () => {
    let inputValue = document.getElementById("num").value.replace(/\s/g, "");
    return (inputValue = inputValue.split("").map(function (n) {
      return Number(n);
    }));
  };

  const polarNRZ_I = () => {};

  const handleClickPolarRZ = () => {
    const res = polarRZ(changeInput());
    setResData([...res]);
    setHasSecondSignal(true);
  };

  const polarNRZ_L = () => {};

  const polarManchester = () => {};

  const handleClickNRZ = () => {
    const res = NRZ(changeInput());
    setActiveClassForChart("nrz");
    setResData([...res]);
    setHasSecondSignal(false);
  };

  const handleChange = (e) => {
    e.target.value = e.target.value
      .replace(/[^0-1]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
    if (e.target.value.length > 0) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  const bipolar = (str) => {
    setActiveClassForChart(str.toLocaleLowerCase());
    if (str === "bipolarAMI") {
      let res = FbipolarAMI(changeInput());
      setResData([...res]);
      setHasSecondSignal(false);
    }
    if (str == "bipolarPseudoter") {
      let res = FbipolarPseudoternary(changeInput());
      setResData([...res]);
      setHasSecondSignal(false);
    }
  };

  const polar = (str) => {
    setActiveClassForChart(str.toLocaleLowerCase());
    if (str === "polarNRZ_I") {
      let res = FpolarNRZ_I(changeInput());
      setResData([...res]);
      setHasSecondSignal(false);
    }
    if (str == "polarNRZ_L") {
      let res = FpolarNRZ_L(changeInput());
      setResData([...res]);
      setHasSecondSignal(false);
    }
    if (str == "polarManchester") {
      let res = FpolarManchester(changeInput());
      setResData([...res]);
      setHasSecondSignal(true);
    }
  };

  const multilevel = (str) => {
    setActiveClassForChart(str.toLocaleLowerCase());
    if (str == "2B/1Q") {
      let res = F2b1q(changeInput());
      setResData([...res]);
      setHasSecondSignal(false);
    }
  }

  return (
    <div className="App">
      <div className="info">
        <h2>Sayısal Sinyallerin Sayısala Çevrilmesi</h2>
        <p> <span>Problem: </span> Sinyal kodlamada, uzun süre boyunca sürekli 1 veya 0 içeren sinyallerin alıcı tarafında doğru bir şekilde çözülmesi zor olabilir. Bu tür durumlar, alıcıda sinyalin doğru okunmasını engelleyebilir ve iletimde hata olasılığını artırabilir.</p>
        <p>Bir sayısal sinyal belirli bir süre boyunca sabit kalırsa 'sürekli 1 veya 0 göndermek gibi..' sinyalde bir DC bileşeni oluşabilir ve düşük frekanslı bileşenlerin iletimi ve doğru algılanması zorlaşabilir. </p>
        <p><span>Çözüm:</span> Sayısal kodlama teknikleri iletim hattının fiziksel özelliklerine uyum sağlayarak daha uzun mesafelerde veri iletimini optimize edebilir</p>
        <p> İletim sırasında oluşabilecek hataları algılayabilir veya düzeltebilir.</p>
      </div>
      <h2>Lütfen 0 ve 1 lerden oluşan değer giriniz.</h2>
      <input
        onChange={(e) => handleChange(e)}
        id="num"
        type="text"
        min="0"
        max="1"
        name="num"
        maxlength="14"
      />

      <div className="categoryButtons buttons">
        {["Unipolar", "Polar", "Bipolar", "Multilevel", "Multitransition"].map(
          (item) => (
            <button
              onClick={() => setCategory(item.toLowerCase())}
              className={
                item.toLocaleLowerCase() == category
                  ? "category"
                  : "category active"
              }
            >
              {item}
            </button>
          )
        )}
      </div>

      <div className="buttons">
        {category == "unipolar" && (
          <button
            disabled={disabledButton}
            className={
              activeClassForChart == "nrz" ? "category" : "category active"
            }
            onClick={handleClickNRZ}
          >
            NRZ
          </button>
        )}
        {category == "polar" && (
          <>
            {["polarNRZ_I", "polarNRZ_L", "polarManchester"].map((item) => {
              return (
                <button
                  key={item}
                  disabled={disabledButton}
                  onClick={() => polar(item)}
                  className={
                    item.toLocaleLowerCase() == activeClassForChart
                      ? "category"
                      : "category active"
                  }
                >
                  {item}
                </button>
              );
            })}
          </>
        )}

        {category == "bipolar" && (
          <>
            {["bipolarAMI", "bipolarPseudoter"].map((item) => {
              return (
                <button
                  disabled={disabledButton}
                  className={
                    item.toLocaleLowerCase() == activeClassForChart
                      ? "category"
                      : "category active"
                  }
                  onClick={() => bipolar(item)}
                >
                  {item}
                </button>
              );
            })}
          </>
        )}

        {category == 'multilevel' && (
          <>
          {['2B/1Q'].map(item=>{
            return (
              <button
              disabled={disabledButton}
              className={
                item.toLocaleLowerCase() == activeClassForChart
                  ? "category"
                  : "category active"
              }
              onClick={() => multilevel(item)}
            >
              {item}
            </button>
            )
          })}
          </>
        )}



      </div>
      <div className="chart-container">
        <Chart resData={resData} hasSecondSignal={hasSecondSignal} />
      </div>
    </div>
  );
}

export default App;

//         <button disabled={disabledButton} onClick={handleClickPolarRZ}>polarRZ </button>
