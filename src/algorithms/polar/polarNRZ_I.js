const FpolarNRZ_I = (data) => {
  var result = [{}]


  console.log("hehehe")
  for(let i = 0; i < data.length; i++){
      result[i]={
          uv: 0,
          pv: 0,
      }
  }
    var prevData;

    for (let i = 0; i < data.length; i++) {
      if (i == 0) {
        prevData = 5;
        result[i].uv = prevData;
        continue;
      }
      if (data[i] == 0) {
        result[i].uv = prevData;
        continue;
      }
      if (data[i] == 1) {
        if (prevData == 5) {
          result[i].uv = -5;
          prevData = -5;
          continue;
        } else {
          result[i].uv = 5;
          prevData = 5;
          continue;
        }
      }
    }
    
    return result
  };

  export default FpolarNRZ_I