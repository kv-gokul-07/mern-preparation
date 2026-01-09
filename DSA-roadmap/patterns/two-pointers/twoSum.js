
const arrVal = [1, 2, 4, 5, 6, 7];

const twoSum = (arr, target) => {

    let left = 0
    let right = arr.length - 1;

    while(left < right) {

        let sum = arr[left]  + arr[right];

        if(sum === target) {
            return [arr[left], arr[right]]
        }
       
        if(sum < target) {
            left++
        }
        else {
            right--
        }
    }

    return null
}

console.log(twoSum(arrVal, 9))