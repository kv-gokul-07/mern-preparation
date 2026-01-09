
const arrVal = ["1", "2", "3", "4", "5"]

const reverseString = (arr) => {

        for (let i = 0; i < arr.length / 2; i++) {
            [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]]
        }

        return arr
}

console.log(reverseString(arrVal))