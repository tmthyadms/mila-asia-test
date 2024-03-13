const findPairs = (nums: number[], sum: number) => {
  return nums
    .sort((a, b) => a - b)
    .reduce((pairs, currVal, currIdx, arr) => {
      for (let i = currIdx + 1; i < nums.length; i++) {
        const isEquivalent = arr[i] + currVal === sum;
        if (isEquivalent) return [...pairs, ...[[arr[i], currVal]]];
      }
      return pairs;
    }, [] as number[]);
};

// 1st test case
console.log(findPairs([3, 5, 2, -4, 8, 11], 7));

// 2nd test case
console.log(findPairs([4, 6, 7, -3, 9, 12], 9));
