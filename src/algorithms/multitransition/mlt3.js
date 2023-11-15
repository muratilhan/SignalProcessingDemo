const Fmlt3 = (data) => {
    var result = [{}]
  
    for(let i = 0; i < data.length+1; i++){
        result[i]={
          lineColor: "red",
            x: i,
            y: 0,
        }
    }
    let prev = 0;
    let lastNonZeroLevel=-1;
      for (let i = 0; i < data.length+1; i++) {
    
        if(data[i] === 0){
            result[i].y = prev
            continue
        }   
        if(data[i] === 1 && prev !== 0){
            result[i].y = 0;
            prev = 0;
            continue
        }
        if(data[i] === 1 && prev === 0){
            result[i].y = -lastNonZeroLevel;
            prev = result[i].y
            lastNonZeroLevel = -lastNonZeroLevel;
            continue
        }
      }
      
      return result
    };
  
    export default Fmlt3

