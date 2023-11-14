

const FbipolarPseudoternary = (data) => {
    var result = [{}]

    for(let i = 0; i < data.length; i++){
        result[i]={
            uv: 0,
            pv: 0,
        }
    }
    var count=0;

    for (let i = 0; i < data.length; i++) {
      if(data[i] == 1){
        result[i].uv = 0.08
      }else{
        if(count == 0){
            result[i].uv = 2
            count = 1
        }else{
            result[i].uv = -2
            count = 0
        }
      }
    }
    
    return result
  };

  export default FbipolarPseudoternary