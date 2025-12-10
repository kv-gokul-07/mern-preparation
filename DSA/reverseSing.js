//Reversing String for ABCGH to HGCBA
const reverseString = (str) => {

    let dummyStr = "";
    for(let i = str.split("").length - 1 ; i >=  0; i--) {
        dummyStr += str[i]
    }

    return dummyStr;
}

// console.log(reverseString("ABCGH"))  // output: HGCBA

const rverseStringWithSpace = (str) => {

    let finalStr = "";
    for(let i of str.split(" ")) {
         let dummyStr = "";
            for(let j = i.split("").length - 1 ; j >=  0; j--) {
                dummyStr += i[j]
            }
            finalStr += dummyStr + " ";
    }
    return finalStr.trim();
}

const strVal = "Hello this is gokul" 
console.log(rverseStringWithSpace(strVal)); // ouput: olleH siht si lukog