
//inbuilt method
// const reverseWord = (str) => {

//     const tempStr = str.split(" ");
//     let res = "";
//     let temp = ""
//     for(let i of tempStr) {
//         for(let j = i.length - 1; j >= 0; j--) {
//             temp += i[j];
//         }
//         res = res + temp + " "
//         temp = "";
//     }
//     return res;
// }

// const str = "This is thw world for Pumbdaw";
// console.log(reverseWord(str));

//second method
const reverseWord = (str) => {
    
    let temp = "";
    let res = ""
    for(let i = 0; i <= str.length - 1; i++) {

        if(str[i] !== " ") {
            temp = str[i] + temp
        }
        else{
            res = res + temp + " ";
            temp = ""
        }
    }

    return res + temp
}

const str = "This is thw world for Pumbdaw";
console.log(reverseWord(str)); //output: sihT si wht dlrow rof wadbmuP


