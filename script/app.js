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
// 98 - task
// function doubleNumericValues(obj) {
//     let newObj = {};
//     for (let key in obj) {
//        if (typeof obj[key] === "number") {
//           newObj[key] = obj[key] * 2;
//        } else {
//           newObj[key] = obj[key];
//        }
//     }
//     return newObj;
//  }
 
//  // // Test case
//  const obj = {
//     a: 1,
//     b: {
//        c: 2,
//        d: {
//           e: 3,
//           f: 4,
//        },
//     },
//  };
//  console.log(doubleNumericValues(obj));
//  // // Output: { a: 2, b: { c: 4, d: { e: 6, f: 8 } } }
 

// //TASK - 100
// function transformStrings(obj, transformFunc) {
//     if (typeof obj === "string") {
//        return transformFunc(obj);
//     } else if (typeof obj === "object" && obj !== null) {
//        for (const key in obj) {
//           obj[key] = transformStrings(obj[key], transformFunc);
//        }
//     }
//     return obj;
//  }
 
// //  Test case
//  const obj = {
//     a: "hello",
//     b: {
//        c: "world",
//        d: {
//           e: "test",
//        },
//     },
//  };
//  console.log(transformStrings(obj, (str) => str.toUpperCase()));
//  // Output: { a: "HELLO", b: { c: "WORLD", d: { e: "TEST" } } }


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