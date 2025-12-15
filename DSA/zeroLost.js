
//My Version 
// const zeroLost = (arr) => {

//     let nonZero = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] !== 0) {
//             nonZero.push(arr[i]);
//         }
//     }

//     const length = arr.length - nonZero.length
//     let count = 0;
//     while(count < length) {
//         nonZero.push(0);
//         count++
//     }

//   return nonZero
// }

//Swapping Method
const zeroLost = (arr) => {

    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            [arr[count], arr[i]] = [arr[i], arr[count]];
            count++;
        }
    }
    return arr;
}

const arr = [0, 0, 1, 2, 10, 10, 1, 0]

console.log(zeroLost(arr)); 
