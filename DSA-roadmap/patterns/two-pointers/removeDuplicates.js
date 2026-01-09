const arrVal = [1, 1, 1, 2, 2, 3, 5];

const removeDuplicates = (arr) => {
  if (arr.length === 0) return 0;

  let left = 0;

  for (let right = 1; right < arr.length; right++) {
    if (arr[right] !== arr[left]) {
      left++;
      arr[left] = arr[right];
    }
  }

  return arr.slice(0, left + 1);
};

console.log(removeDuplicates(arrVal));