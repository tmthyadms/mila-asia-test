const findStartAndEndIndexes = (nums: number[], target: number) => {
  return [
    nums.findIndex((num) => num === target),
    nums.findLastIndex((num) => num === target),
  ];
};

// 1st test case
console.log(findStartAndEndIndexes([5, 7, 7, 8, 8, 10], 8));

// 2nd test case
console.log(findStartAndEndIndexes([5, 7, 7, 8, 8, 10], 6));

// 3rd test case
console.log(findStartAndEndIndexes([], 0));
