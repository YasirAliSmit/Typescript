//Let's learn Type Typescript
//Fundamentals of Typescript
//1.The any Type
//2.Array
//3.Tupples
//4.Enums
//5.Function
//6.Object

//1. let sales :number = 123_456_789 ;
// let studentName:string = 'yasir' ;
// let studentStatus:boolean = true ;

//2.The any Type  in this example you are give a any type of level variable in any Type you can assign any type of data type
// let level ;
// level = 0 ;
// level = 'one'
// console.log(level)
// function stuName (names:any){
// console.log(`This is our student ${names}`)
// }
// stuName('Nasir')
//let number = [1,2,3,4,5]

//3.Tupples in more than two element but you have aslo defined the type 0f element
// let studentInfo :[string,number,boolean] = ['Yasir',23,true]
// console.log(studentInfo)

//4.Enums
// const enum StudentName {small='s',mediem='m',large='l'}
// const ans = StudentName.small
// console.log(ans)

//5.Function
// in this example we tell the function our function is return number and it takes argument as a number
// function studentName (numbers:number,strings:number) : number {
// //console.log(numbers)
// return numbers += strings
// }
// let ans = studentName(5,1)
// console.log(ans)

//ADVANCED TYPE

//TYPE ALIASES
//UNINION AND INTERSION
//TYPE NARROWING
//NULLABLE TYPES
// THE UNKNOW TYPES
//THE NEVER TYPES

//Union Types
// let studentInto:Number | String = 1
// studentInto = 'yasir'

// function kgToLb(weight: number| string): number {
//   if (typeof weight === "number") return weight * 2;
//   else return parseInt(weight);
// }
// kgToLb(1)
// kgToLb('2')


//Intersection Typess