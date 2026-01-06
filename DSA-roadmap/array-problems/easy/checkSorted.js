const arr = [1, 2, 3, 4, 5, 0];

const checkSortedArr = (arrs) => {

    for(let i = 0; i < arrs.length; i++) {
        if(arrs[i] > arrs[i + 1]) {
            return "Not in Sort"
        }
    }

    return "Its Sorted"
}

console.log(checkSortedArr(arr)) // Not in Sort due to input is not sorted