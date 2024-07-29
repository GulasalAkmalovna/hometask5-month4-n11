//TASK - 96
// function firstUnique(arr) {
//     let newArr = arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item))
//     return newArr[0]
// }

// // Test case
// console.log(firstUnique([2, 3, 4, 2, 3, 5, 6, 5])); 
// // Output: 4

//TASK - 97
// function extractAndSortNumbers(str) {
//     let arr = str.split("")
//     let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
//     let newArr = arr.filter(item => nums.includes(item) ? item : "")
//     return newArr.sort((a, b) => a - b)
// }

// // Test case
// console.log(extractAndSortNumbers("a3c2d4b1"));
// // Output: [1, 2, 3, 4]

//TASK - 98


//TASK - 99



//TASK - 100


//TASK - 101


//TASk - 102
// function uniqueConcat(arr) {
//    arr.sort()
//    let result = []
//    for(let i = 0; i < arr.length; i++){
//     if (arr[i] !== arr[i + 1]) {
//         result.push(arr[i])
//     }
//    }
//    return result
// }

// // Test case
// console.log(uniqueConcat(['a', 'b', 'c', 'a', 'b', 'd'])); 
// // Output: "abcd"


//TASK - 103
// function findDuplicates(arr) {
//     let newArr = arr.filter(item => arr.indexOf(item) !== arr.lastIndexOf(item))
//     let n = new Set(newArr)
//     return [...n]
//  }
 
//  // Test case
//  console.log(findDuplicates([1, 2, 3, 1, 2, 4])); 
//  // Output: [1, 2]