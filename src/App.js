import { useEffect, useState } from "react";
import "./App.css";
import Chart from "./chart/Chart";
import FpolarNRZ_I from "./algorithms/polar/polarNRZ_I";
import FpolarNRZ_L from "./algorithms/polar/polarNRZ_L";
import FpolarManchester from "./algorithms/polar/polarManchester";
import FbipolarAMI from "./algorithms/bipolar/bipolarAMI";
import FbipolarPseudoternary from "./algorithms/bipolar/bipolarPseudoternary";
import NRZ from "./algorithms/unipolar/NRZ";
import F2b1q from "./algorithms/multilevel/2b1q";
import React from "react";
import { db } from "./info";
import Fmlt3 from "./algorithms/multitransition/mlt3";

function App() {
  const [resData, setResData] = useState([]);
  const [disabledButton, setDisabledButton] = useState(true);
  const [category, setCategory] = useState();
  const [activeClassForChart, setActiveClassForChart] = useState("");

  const changeInput = () => {
    let inputValue = document.getElementById("num").value.replace(/\s/g, "");
    return (inputValue = inputValue.split("").map(function (n) {
      return Number(n);
    }));
  };

  const handleClickNRZ = () => {
    const res = NRZ(changeInput());
    setActiveClassForChart("nrz");
    setResData([...res]);
  };

  const handleChange = (e) => {
    e.target.value = e.target.value
      .replace(/[^0-1]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
    if (e.target.value.length > 3) {
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
    }
    if (str == "bipolarPseudoter") {
      let res = FbipolarPseudoternary(changeInput());
      setResData([...res]);
    }
  };

  const polar = (str) => {
    setActiveClassForChart(str.toLocaleLowerCase());
    if (str === "polarNRZ_I") {
      let res = FpolarNRZ_I(changeInput());
      setResData([...res]);
    }
    if (str == "polarNRZ_L") {
      let res = FpolarNRZ_L(changeInput());
      setResData([...res]);
    }
    if (str == "polarManchester") {
      let res = FpolarManchester(changeInput());
      setResData([...res]);
    }
  };

  const multilevel = (str) => {
    setActiveClassForChart(str.toLocaleLowerCase());
    if (str == "2B/1Q") {
      let res = F2b1q(changeInput());
      setResData([...res]);
    }
  };
  const multitransition = (str) => {
    setActiveClassForChart(str.toLocaleLowerCase());
    if (str == "MLT3") {
      let res = Fmlt3(changeInput());
      setResData([...res]);
    }
  };

  return (
    <div className="App">
      <div className="introduction">
        <h2>Sayısal Sinyallerin Sayısala Çevrilmesi</h2>
        <p>
          {" "}
          <span>Problem: </span> Sinyal kodlamada, uzun süre boyunca sürekli 1
          veya 0 içeren sinyallerin alıcı tarafında doğru bir şekilde çözülmesi
          zor olabilir. Bu tür durumlar, alıcıda sinyalin doğru okunmasını
          engelleyebilir ve iletimde hata olasılığını artırabilir.
        </p>
        <p>
          Bir sayısal sinyal belirli bir süre boyunca sabit kalırsa 'sürekli 1
          veya 0 göndermek gibi..' sinyalde bir DC bileşeni oluşabilir ve düşük
          frekanslı bileşenlerin iletimi ve doğru algılanması zorlaşabilir.{" "}
        </p>
        <p>
          <span>Çözüm:</span> Sayısal kodlama teknikleri iletim hattının
          fiziksel özelliklerine uyum sağlayarak daha uzun mesafelerde veri
          iletimini optimize edebilir
        </p>
        <p>
          {" "}
          İletim sırasında oluşabilecek hataları algılayabilir veya
          düzeltebilir.
        </p>
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

      <div className="buttons">
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

        {category == "multilevel" && (
          <>
            {["2B/1Q"].map((item) => {
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
              );
            })}
          </>
        )}

        {category == "multitransition" && (
          <>
            {["MLT3"].map((item) => {
              return (
                <button
                  disabled={disabledButton}
                  className={
                    item.toLocaleLowerCase() == activeClassForChart
                      ? "category"
                      : "category active"
                  }
                  onClick={() => multitransition(item)}
                >
                  {item}
                </button>
              );
            })}
          </>
        )}
      </div>
      <div className="chart-container">
        <Chart className="chart" resData={resData} />
        <div className="info">
          <h1>Algoritma Adımları:</h1>
          {db.map(
            (item) =>
              item.name == activeClassForChart && (
                <p>
                  {" "}
                  {item.infos.map((item) => (
                    <li>{item}</li>
                  ))}{" "}
                </p>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

//         <button disabled={disabledButton} onClick={handleClickPolarRZ}>polarRZ </button>

/*


*/
