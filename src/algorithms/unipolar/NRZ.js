const NRZ = (data) => {
    var result = [{}]
  
    for(let i = 0; i < data.length; i++){
        result[i]={
            uv: 0,
            pv: 0,
        }
    }
      var prevData;
  
      for (let i = 0; i < data.length; i++) {
        if(data[i] == 1){
          result[i].uv = 2
        }else{
          result[i].uv = 0.02
        }
      }
      
      return result
    };
  
    export default NRZ