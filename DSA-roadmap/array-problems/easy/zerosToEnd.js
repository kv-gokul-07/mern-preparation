const arrar = [6, 0, 4, 3, 0, 1, 0]

const zerosToEnd = (arr) => {
    let temp = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0) temp.push(arr[i]);
    }

    while (temp.length < arr.length) {
        temp.push(0);
    }

    return temp;
}

console.log(zerosToEnd(arrar))
