const FpolarNRZ_I = (data) => {
  var result = [{}]


  console.log("hehehe")
  for(let i = 0; i < data.length; i++){
      result[i]={
        lineColor: "red",
          x: i,
          y: 0,
      }
  }
    var prevData;

    for (let i = 0; i < data.length; i++) {
      if (i == 0) {
        prevData = 1;
        result[i].y = prevData;
        continue;
      }
      if (data[i] == 0) {
        result[i].y = prevData;
        continue;
      }
      if (data[i] == 1) {
        if (prevData == 1) {
          result[i].y = -1;
          prevData = -1;
          continue;
        } else {
          result[i].y = 1;
          prevData = 1;
          continue;
        }
      }
    }
    
    return result
  };

  export default FpolarNRZ_I