const arr = [1, 2, 2, 3, 4, 4, 5, 6];

//Using Map
// const checkDuplicates = (arrs) => {

//     let map = new Map();
//     for(let i = 0; i < arrs.length; i++) {
//             if(!map.has(arrs[i])) {
//                 map.set(arr[i], i)
//             } 
//     }

//     console.log(map, "mapValue")

// }

const checkDuplicates = (arrs) => {
    let map = [];
    for(let i = 0; i < arrs.length; i++) {
        if(!map.includes(arrs[i])) {
            map.push(arrs[i])
        } 
    }
    return map;
}

console.log(checkDuplicates(arr)) // Using Map