const numberRandom = (min, max)=>{
    return Math.floor(Math.random() * (max - min)) + min;
}

const randomArray = (arr) =>{
    arr.forEach((elemento, i, array) => {
    let numArray, j
        j= numberRandom(0,4)
        numArray = array[i];
        array[i] = array[j] 
        array[j] = numArray
   });
    return arr
}

export {randomArray, numberRandom} 