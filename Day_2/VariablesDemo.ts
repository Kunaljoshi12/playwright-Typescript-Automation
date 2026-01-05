// Variable is a container which can hold/store some data.

//var, let & const used for variable declearation
// Syntax: keyword variableName :data type=value
// Ex: var age:number = 30 including data type
// Ex: var age= 30 excluding data type


// var age=20;
// console.log("age")
// console.log(age)

// var vs let vs const
//---------------------

// 1. Scope
// 2. Declearation/Value Assignment
// 3. Re- Declearation
// 4. Re-initalization/ Re-assignment
// 5. Hosting

//var- Not used in Modern JS/TS. Avoid var becos is has function scope and can lead to unexpected
//let- Use let when you need a variable that can change
// const - Use consts when the variable value should not change


//Scope - accessibe area (functional scope, block scope)
// var is a functional scope

// Ex: var(Functional scope)
// function varscope()
// {
//     var ms="Hello World"
//     if(true)
//     {
//         var msg="Hello World";
//         //console.log(msg);
//     }
//     console.log(msg);
// }
// varscope();


// Ex 2: let and const (Block Scope)
/*function blockscope()
{
    var ms="Hello World"
    if(true)
    {
        let msg="Hello World";
        const gree = "Hello Const";
        console.log(msg);
        console.log(gree);   
    }
}
blockscope();
*/

// 2 Declaration/Value Assignment
//Ex: Var Declaration/Value Assignment
// var x;
//  console.log(x)
// x=10;
// console.log(x)


//Ex: let Declaration/Value Assignment
// let y;
//  console.log(y)
// y=10;
// console.log(y)

//Ex: const Declaration/Value Assignment
// const z;
//  console.log(z)
// z=10;
// console.log(z)

// 3 Redeclaration
//Ex: var allow Redeclaration
// var  city = "New York"
// var  city = "Los Angeles"
// console.log(city)

//Ex: let not allow Redeclaration
// let  city = "New York"
// let  city = "Los Angeles"
// console.log(city)

//Ex: const not allow Redeclaration
// const  city = "New York"
// const  city = "Los Angeles"
// console.log(city)

// 4) Re-initization/Re-assignment
// var and let - Re-assignment Allowed
//const - Re-assignment allowed (Only constants allowed-can't change the value)

//Ex: 1
// var age =40
// age =56
// console.log(age)

//Ex: 2
// let age =40
// age =56
// console.log(age)

// //Ex: 3
// const age =40
// age =56
// console.log(age)

//5 Hosting var (Hoistited with undefined), let & const(Noot initialized)
// // Ex 1:
// console.log(a)
// var a =19
// console.log(a)

//Ex: 2
// console.log(a)
// let a =19
// console.log(a)

//Ex: 3
// console.log(a)
// const a =19
// console.log(a)


