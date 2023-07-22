"use strict";
//Fundamental Of TypeScript
//The Any Type;
//arrays
//Tuples
//Enums
//Function
//Object
//Tuples
//when we use Tuples we we have a particular array each array have a particular type here is example of Tuples
//let numbes : [number,string] = [20,'Yasir']//
//Enums Represent list of related Constant Enums
// const enum studentName {Yasir='Yasir',Nasir='Nasir',ibrahim='ibrahim'}
// let mySize = studentName.Nasir
//console.log(mySize)
//Fuction void means it,s return nothing this three things always should be true  1. "noUnusedLocals": true,   2. "noUnusedParameters": true,  3.  "noImplicitReturns": true,
// function calculateTax (num:number,taxYear:number=600):number{
// if(taxYear > 500)
// return num * 1
// return num * 1.5
// }
// let ans = calculateTax(1,600)
// console.log(ans)
//Objects in  we can use readOnly it mean we cannot modify the value of object
// let employment: {
//   readonly id: number;
//   name: string;
//   retire: (date: number) => number;
// } = {
//   id: 1,
//   name: "Yasir",
//   retire: (date) => {
//     return date
//   },
// };
// console.log('hello',employment.retire(2));
//Advaced type of TypeScript
//1.Type Aliases
//2.Union and intersections
//3.Type narrowing
//4.Nullable Types
//5.The Unknow Types
//6.The Never type
// this is example of aliases
// type Emplyee = {
//   id: number;
//   name: string;
//   retire: (num: number) => number;
// };
// let studentInfo: Emplyee = {
//   id: 1,
//   name: "Yasir",
//   retire: (num) => num,
// };
//Union type
//here is example of Union Types
// function kgToLbs(num: number | string) {
//   if (typeof num === "number") return num * 1;
//   else return parseInt(num);
// }
// kgToLbs(10);
// kgToLbs("10kg");
// const studentInfo: string | number = 10;
// function sumOfNum(num: number | string) {
//   if (typeof num === "number") return num + 1;
//   else return parseInt(num);
// }
// //Intersection Types
// type JoinReq = {
//     req :number;
//     name:string
// }
// type SeniorReq = {
//     req:number;
//     name:string,
//     avaialbe:boolean
// }
// type CompanyReq = JoinReq & SeniorReq ;
// let data :CompanyReq = {
//     req:4,
//     name:'yasir',
//     avaialbe:true
// }
// console.log(data)
//Interface Types
// interface JoinReq  {
//     req :number;
//     name:string
// }
// interface SeniorReq {
//     req:number;
//     name:string,
//     avaialbe:boolean
// }
// interface CompanyReq extends JoinReq , SeniorReq {}
// let emp : CompanyReq = {
//     req:1,
//     name:'Yasir',
//     avaialbe:true
// }
//Literall Types 
// type Quantity = 50 | 100
// const req : Quantity = 50 ;
//Nullest type
function getName(stuName) {
    if (stuName)
        return stuName.toUpperCase();
    else
        return null;
}
getName('Yasir');
