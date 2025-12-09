// Using HashMap
//1. Complement number is important

const twoSum = (arr, target) => {
    const map = new Map();
   
    for(let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if(map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(arr[i], i);
    }

    return null;
}


let arrVal = [2, 5, 8, 11, 13];
console.log(twoSum(arrVal, 19))
