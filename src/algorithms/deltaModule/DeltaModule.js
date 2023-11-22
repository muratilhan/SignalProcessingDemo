

const FDeltaModule = (data) => {
    var result = [{}]

    for(let i = 0; i < data.length; i++){
        result[i]={ 
            x: i,
            y: 0,
        }
    }
    let bits = []
    let temp = 1;
    for (let i = 0; i < data.length; i++) {
        if( i == 0 ){
            result[i].y = temp;
            bits.push(0)
        }
        if( data[i] >= data[i-1]){
            temp = temp+1;
            result[i].y = temp;
            bits.push(1)
            continue;
        }
        if(data[i] < data[i-1]){
            temp = temp-1;
            result[i].y = temp;
            bits.push(0)
            continue;
        }
        

    }
    
    return {bits,result}
  };

  export default FDeltaModule