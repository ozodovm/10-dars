// 1-misol
// const arr = [5, 10, true, null, 8];
// const sum = arr.reduce((acc, val) => acc + (typeof val === 'number' ? val : 0), 0);
// console.log(sum); 

// 2-misol
// const arr2 = [0, 2, 5, false, 6];
// const arr3 = [5, 6, true, null, 8];
// const mergedSum = [...arr2, ...arr3].reduce((acc, val) => acc + (typeof val === 'number' ? val : 0), 0);
// console.log(mergedSum); 

// 3-misol
// const numbers = [5, 4, 3, 6, 3, 7, 1];
// const minIndex = numbers.indexOf(Math.min(...numbers));
// console.log(minIndex); 

// 5-misol
// let arr1 = [5, 4, 3, 6, 3, 7, 1];
// let arr2 = [22, 1, 42, 34, 55, 67, 11, 32];
// let combinedArray = [...arr1, ...arr2].sort((a, b) => a - b);
// console.log(combinedArray);

// 6-misol
// let carsArr = [
//     { name: "Lasetti", price: 9000 },
//     { name: "Damas", price: 7800 },
//     { name: "Cobalt", price: 12500 },
//     { name: "Gentra", price: 14000 },
//     { name: "Onix", price: 17000 }
//   ];
//   let sortedByName = [...carsArr].sort((a, b) => a.name.localeCompare(b.name));
//   console.log(sortedByName);
//   let sortedByPrice = [...carsArr].sort((a, b) => a.price - b.price);
//   console.log(sortedByPrice);
  
// 7-misol
// let word1 = prompt("Birinchi so'zni kiriting:");
// let word2 = prompt("Ikkinchi so'zni kiriting:");
// let arr = ["Salom", "Raxmat"];
// arr.splice(1, 0, word1, word2);
// console.log(arr); 

// 8-misol
// misoli ishlay olmadm