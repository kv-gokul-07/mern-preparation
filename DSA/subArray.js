
const subArray = (arr) => {
    
    let res = arr[0];
    let maxArr = arr[0];

    for(let i = 0; i < arr.length; i++) {
       maxArr = Math.max(maxArr + arr[i], arr[i]);
       res = Math.max(res, maxArr);
    }

    return res;
}

const sarr = [2, 3, -8, 7, -1, 2, 3];
console.log(subArray(sarr))