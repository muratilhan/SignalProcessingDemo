

const FbipolarPseudoternary = (data) => {
    var result = [{}]

    for(let i = 0; i < data.length+1; i++){
        result[i]={
          lineColor: "red",
            x: i,
            y: 0,
        }
    }
    var count=0;

    for (let i = 0; i < data.length; i++) {
      if(data[i] == 1){
        result[i].y = 0
      }else{
        if(count == 0){
            result[i].y = 1
            count = 1
        }else{
            result[i].y = -1
            count = 0
        }
      }
    }
    
    return result
  };

  export default FbipolarPseudoternary