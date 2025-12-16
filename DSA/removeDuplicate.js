
const removeDup = function(arr1) {
    const tempArr = []

    for(let i = 0; i < arr1.length; i++) {
        if(!tempArr.includes(arr1[i])) {
            tempArr.push(arr1[i])
        }
    }
    return tempArr
};

const arr = [1,1,2,5,10, 5];
console.log(removeDup(arr));


//Using HashMap

const removeDup1 = (arr) => {
  const seen = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(removeDup1([1, 1, 2, 5, 10, 5]));