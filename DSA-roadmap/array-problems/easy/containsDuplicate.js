
const arrDup = [1, 2, 3, 1];

const findDupNum = (arr) => {

    let temp = [];
    for(let i = 0; i < arr.length; i++) {
        if(!temp.includes(arr[i])) {
            temp.push(arr[i])
        } else {
            return "Its Contains Duplicate"
        }
    }

    return "Doesnt contains Duplicate"
}

console.log(findDupNum(arrDup))