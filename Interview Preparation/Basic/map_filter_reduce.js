// Map

const nums = [1, 2, 3, 4, 5];

let multiplyFive = nums.map((num,i) => num*5+i);

console.log(multiplyFive); // [ 5, 11, 17, 23, 29 ]

// filter 
let oddNums = nums.filter(num => num%2==0);

console.log(oddNums)//[ 2, 4 ]

// reduce
let sum = nums.reduce((acc, curr, i, arr)=>{
    return acc +curr
}, 0)
console.log(sum) // 15