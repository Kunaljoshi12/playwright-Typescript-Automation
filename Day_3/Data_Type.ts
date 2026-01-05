/* 1. Premitive Data Type(Buil-in)--> Number, String, Boolean, Null, undefined, Any, Unio Type, void
   2. Non- Premitive Data Types(Objects)--> Array, Class, Function, Interface, Touple
   */
/*
// 1. Number type used number, float
let age:number=25;
let price:number=47.34
let big:number=32323257776654;

console.log("Age: ",age)
console.log("Price: ",price)
console.log("Big: ",big)

console.log(typeof age)
console.log(typeof price)
console.log(typeof big)
*/

// 2 String type
/*
1. Single Quote('')
2. DoubleQuote(" ")
3. Backtick(``) 
let first="Shiv"
let Last="Jhon"
let combine:string= `Hello ${first} ${Last}`// backtick
console.log(combine)*/

// 3 Boolean--> try/false
/*
let Student:boolean= true
let hasJob:boolean=false

console.log("Is student: ",Student)
console.log("Has Job ? ", hasJob )*/

/*
//4 Null & Undefined
// Special types for absence f value

let emptyvslue:null=null
let notAssigned: undefined=undefined
console.log(null)
console.log(undefined)*/

/*
// 5. ANY type
let value:any="Heoo"
let num:any=4343.3
let Bool:any=true
let N:any=null
let Un:any=undefined

console.log(value)
console.log(num)
console.log(Bool)
console.log(N)
console.log(Un)
*/

/*
//6. Union--> Combine multiple type
let id:number| string| boolean
id=23
console.log(id)
id=true
console.log(id)
id="JKIB"
console.log(id)

*/


// VOID type
// Used for function that don't return anything
function show():void
{
    console.log("Welcome")


}
show()