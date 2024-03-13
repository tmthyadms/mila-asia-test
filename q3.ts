const findDistinctWays = (num: number) => {
  if (num === 1) return 1;
  else if (num === 2) return 2;
  else return findDistinctWays(num - 1) + findDistinctWays(num - 2);
};

// 1st test case
console.log(findDistinctWays(1));

// 2nd test case
console.log(findDistinctWays(2));

// 3rd test case
console.log(findDistinctWays(3));

// 4th test case
console.log(findDistinctWays(4));
