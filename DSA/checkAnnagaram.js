
//Using Inbuilt Method

// const checkAnagram = (str1, str2) => {
//     let sorted1Str = str1.split("").sort();
//     let sorted2Str = str2.split("").sort();

//     if(sorted1Str.length !== sorted2Str.length) {
//         return "Not valid"
//     }

//     for(let i = 0; i < sorted1Str.length; i++) {
//         if(sorted1Str[i] !== sorted2Str[i]){
//             return "Not Valid"
//         }
//     }
//     return "Valid";
// }

// console.log(checkAnagram("earth", "haart"))

//Without using Inbuilt

const checkAnagram = (str1, str2) => {
    if(str1.length !== str2.length) {
        return "Not valid"
    }

    let isThere = [];

    for (let i = 0; i < str1.length; i++) {
        console.log(str1[i]);
        isThere.push(str1[i]);
    }

     for (let i = 0; i < str2.length; i++) {
 
         console.log(str2[i]);
        if(!isThere.includes(str2[i])) {
            return "Invalid"
        }

    }

   
}

console.log(checkAnagram("earth", "heart"))