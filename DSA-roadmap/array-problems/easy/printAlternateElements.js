const arr = [1, 2, 10, 3, 0, 7]

const printAlternateElements = (arrVal) => {
    const temp = [];
    for(let i = 0; i < arrVal.length; i++) {
        if(i%2 !== 0) {
            temp.push(arrVal[i])
        }
    }

    return temp;
}

console.log(printAlternateElements(arr));  //[ 2, 3, 7 ]

//Program TO Print Alternatives Number in Array