const nestedArrays = [[1, 2], [3, 4], [5, 6]];
const flattened = nestedArrays.flatMap((subArray) => subArray.map((num) => num * 2));

console.log(flattened); // [2, 4, 6, 8, 10, 12]