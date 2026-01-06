
const arrar = [6, 5, 4, 3, 2, 1, 7]

// reverse an Array using extra Array

// const revreseArr = (arr) => {
//     let temp = [];
//     for(let i = 0; i < arr.length; i++) {
//        temp.push(arr[arr.length - i - 1])
//     }
//     return temp;
// }

//reverse an array using extra forloop

const revreseArr = (arr) => {
    for(let i = arr.length - 1; i > 0; i--) {
       console.log(arr[i])
    }
}

console.log(revreseArr(arrar))