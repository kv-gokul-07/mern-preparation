
const longPrefix = (arr) => {  
    arr.sort();

    let first = arr[0];
    let last = arr[arr.length - 1];
    let prefix = "";

    for(let i = 0; i < first.length; i++) {
        if (first[i] === last[i]) {
            prefix += first[i];
        } else {
            break;
        }
    }
    console.log(arr, "prefix")

    return prefix;

}

const arrVal = ["flower","flow","flight"]
console.log(longPrefix(arrVal))