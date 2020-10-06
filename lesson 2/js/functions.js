
// const foo = (num) => {
//     if (num % 3 === 0 && num % 5 === 0)
//         console.log("fizzbuzz")
//     else if (num % 3 === 0)
//         console.log("fizz")
//     else if (num % 5 === 0)
//         console.log("buzz")
//     else
//        console.log(num)
// }

// for (let index = 1; index <= 100; index++) {
//     foo(index)    
// }

const gen = (index, action) => {
    return (value) => {
        if(value % index === 0)
            action()
    }
}

const mod15 = gen(15, ()=>console.log("fizzbuzz"))
const mod3 = gen(3, ()=>console.log("fizz"))
const mod5 = gen(5, ()=>console.log("buzz"))

for (let index = 1; index <= 100; index++) {
    mod15(index) // <=> gen(15)(index)
    mod3(index)
    mod5(index)
}