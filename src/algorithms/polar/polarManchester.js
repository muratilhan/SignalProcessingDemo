const FpolarManchester = (data) => {
    var result = [{}]
  
    for(let i = 0; i < data.length*2+1; i++){
        result[i]={
          lineColor: "red",
            x: i,
            y: 0,
        }
    }
      let j = 0;
      let count = 0
      for (let i = 0; i < data.length*2; i++) {
        if( i%2 == 1 ) continue;
        if(data[count] == 0){
          result[j].y = 1
          result[j+1].y = -1
        }else{
            result[j].y = -1
            result[j+1].y = 1
        }
        j = j+2;
        count++
      }
      return result
    };
  
    export default FpolarManchester