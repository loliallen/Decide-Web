// const array = [1, 3, 4]
const array1 = [1, -3, 4, 4, -1, 0, 21, 43, -1]


const array2 = [21, 4, 12]

/*
    1 -> 3
    3 -> 5
    4 -> 6
*/

// console.log(array)
// for (let i = 0; i < array.length; i++) {
//     array[i] += 2; // array[i] = array[i] + 2
// }
// console.log(array)

// array1 + array2  = [1, 3, 4, 21, 4, 12]
// console.log(array1.concat(array2))

// console.log(array1.concat(array2, array2))

// console.log(
//     array1.indexOf(0) // -1 or index of item
// )

// console.log(array1.map((elem, i) => {
//     console.log(elem, elem*elem)
//     return (elem*elem)
// }))

// console.log(array1.forEach((elem, i) => {
//     console.log(elem, elem*elem)
//     return (elem*elem)
// }))

// console.log(array1.filter((el) => {
//     return el <= 0
// }))

console.log(array1.reduce((pr, val) => {
    return pr.concat({val})
}, []))

// 1, -3, 4, 4, -1, 0, 21, 43, -1

// step: 0, pr: 0, val: 1
// step: 1, pr: 1, val: -3
// step: 2, pr: -2, val: 4
// step: 4, pr: 2, val: 4
// step: 5, pr: 6, val: -1