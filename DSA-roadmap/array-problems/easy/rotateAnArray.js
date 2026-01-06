
const arr = [1, 2, 3, 4, 5];

//For right Shift

const rotateArr = (arrVal, n) => {

    let al = arrVal.length;
    let temp = [];
    n = n % al;

    for(let i = al-n; i < al; i++) {
        temp.push(arrVal[i]);
    }

    for(let i = 0; i < al-n; i++) {
        temp.push(arrVal[i]);
    }

    return temp
}

console.log(rotateArr(arr, 2));

//For Left Shift

const rotateLeft = (arrVal, n) => {
    let al = arrVal.length;
    n = n % al;           // important for large n
    let temp = [];

    // move elements from index n to end
    for (let i = n; i < al; i++) {
        temp.push(arrVal[i]);
    }

    // append first n elements
    for (let i = 0; i < n; i++) {
        temp.push(arrVal[i]);
    }

    return temp;
};

console.log(rotateLeft([1, 2, 3, 4, 5], 2));