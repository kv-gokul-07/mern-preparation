
const reverseString = (str) => {

    let tempStr = "";
    
    for(let i = str.length - 1; i >= 0; i --) {
        tempStr += str[i]
    }

    return tempStr
}

const str = "string";
console.log(reverseString(str))  //output = gnirts