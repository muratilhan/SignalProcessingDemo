const NRZ = (data) => {
    var result = [{}]
  
    for(let i = 0; i < data.length; i++){
        result[i]={
          lineColor: "red",
            x: i,
            y: 0,
        }
    }
      var prevData;
  
      for (let i = 0; i < data.length; i++) {
        if(data[i] == 1){
          result[i].y = 1
        }else{
          result[i].y = 0
        }
      }
      
      return result
    };
  
    export default NRZ