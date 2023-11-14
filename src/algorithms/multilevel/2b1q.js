const F2b1q = (data) => {
    var result = [{}]
  
    for(let i = 0; i < data.length; i++){
        result[i]={
            lineColor: "red",
            x: i,
            y: 0,
        }
    }
      var prevData = true;
  
      for (let i = 0; i < data.length; i++) {
        if(i%2 != 0) continue
        if(data[i] == 0 && data[i+1] == 0){
            if(prevData){
                result[i].y = 1
                result[i+1].y = 1
                prevData = true
            }else{
                result[i].y = -1
                result[i+1].y = -1
                prevData = false
            }
        }

        if(data[i] == 0 && data[i+1] == 1){
            if(prevData){
                result[i].y = 3
                result[i+1].y = 3

                prevData = true
            }else{
                result[i].y = -3
                result[i+1].y = -3
                prevData = false
            }
        }

        if(data[i] == 1 && data[i+1] == 0){
            if(prevData){
                result[i].y = -1
                result[i+1].y = -1
                prevData = false
            }else{
                result[i].y = 1
                result[i+1].y = 1

                prevData = true
            }
        }

        if(data[i] == 1 && data[i+1] == 1){
            if(prevData){
                result[i].y = -3
                result[i+1].y = -3
                prevData = false
            }else{
                result[i].y = 3
                result[i+1].y = 3
                prevData = true
            }
        }

      }
      return result
    };
  
    export default F2b1q