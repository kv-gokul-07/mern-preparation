
const arrNum = [1, 2, 3, 4, 5];

const twoSum = (arr, t) => {
    console.log(arr)

    let map = new Map();

    for(let i = 0; i < arr.length; i++) {
        let complement = t - arr[i];
        if(map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(arr[i], i);
    }
    return null
}

console.log(twoSum(arrNum, 9))