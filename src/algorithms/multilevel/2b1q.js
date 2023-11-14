const F2b1q = (data) => {
    var result = [{}]
  
    for(let i = 0; i < data.length; i++){
        result[i]={
            uv: 0,
            pv: 0,
        }
    }
      var prevData = true;
  
      for (let i = 0; i < data.length; i++) {
        if(i%2 != 0) continue
        if(data[i] == 0 && data[i+1] == 0){
            if(prevData){
                result[i].uv = 1
                prevData = true
            }else{
                result[i].uv = -1
                prevData = false
            }
        }

        if(data[i] == 0 && data[i+1] == 1){
            if(prevData){
                result[i].uv = 3
                prevData = true
            }else{
                result[i].uv = -3
                prevData = false
            }
        }

        if(data[i] == 1 && data[i+1] == 0){
            if(prevData){
                result[i].uv = -1
                prevData = false
            }else{
                result[i].uv = 1
                prevData = true
            }
        }

        if(data[i] == 1 && data[i+1] == 1){
            if(prevData){
                result[i].uv = -3
                prevData = false
            }else{
                result[i].uv = 3
                prevData = true
            }
        }

      }
      const res = result.filter(item => item.uv !== 0)
      return res
    };
  
    export default F2b1q