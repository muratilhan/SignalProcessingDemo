const FpolarNRZ_L = (data) => {
    var result = [{}]
  
    for(let i = 0; i < data.length+1; i++){
        result[i]={
          lineColor: "red",
            x: i,
            y: 0,
        }
    }
  
      for (let i = 0; i < data.length; i++) {
        if(data[i] == 0){
          result[i].y = 1
        }else{
          result[i].y = -1
        }
      }
      
      return result
    };
  
    export default FpolarNRZ_L