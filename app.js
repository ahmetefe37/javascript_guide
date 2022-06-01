///////////////////////////////////////   VARIABLES   /////////////////////////////////////////

// console.log("hello world")
// single row comment line

/*
multi row comment line
*/
// let a = 5
// const b = 10 // const is not changable
// a = a+b

// let x = 0,y=1
// const t = x,k = y

// changing const from other way
// let u = 6
// const i = u
// console.log(i)

// variables
// primitve
/*
numbers
strings
booleans
symbols
*/
// object

/*
=== checking equality
!== checking uneqaltiy
*/

// let a = 1
// if(a===1){
//     //do something
// }else if(a===2){
//     // do other something
// }else{
//     // do something at least
// }

// single line if statements
// let x = 1
// if(x===1) console.log("x : "+x)

// string functions
// const myname = "ahmetefe"
// console.log(myname.length)

// ${var} only inside `` tags
// const myname = "efe"
// const self_introduction = `My name is ${myname}`
// console.log(self_introduction)

///////////////////////////////////////   ARRAYS   /////////////////////////////////////////

// a = []
// // or
// a  = Array()

// const a = [1,2,3]
// const b = Array.of(1,2,3)
// const c = [1,2,"efe",true,[1,2,"ahmet"]]

// const matrix =
// [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// c = matrix[0][2]

// filling "0" all celling of the array
// const x = []
// x.fill(0)

// x = [1,2,3,4,5,6]
// const l = x.length

// pushing an element to end of the array
// x = [1,2,3]
// x.push(4)

// adding elements to beginning of the array
// x = [2,3,4]
// x.unshift(1)

// x = [1,2,3,4,5]
// x.pop() // deleting element to end of the array
// x.shift() // deleting element to beginning of the array

// const a =  [1,2,3]
// const b = [4,5,6]
// const c = a.concat(b) // adding b to a
// c = [...a,...b] // adding b to a with "..." symbol

// finding elements in the array
// const a = ["efe","ali","mehmet",1,2,3]
// const res = a.find(x => x==="efe1")

// finding index of an element in the array
// const a = [1,2,3]
// const res = a.findIndex(x => x===3)
// console.log(res)

// find a variable if it exists in the array
// const a = [1,2,3]
// const bool_val = a.includes(1)
// console.log(bool_val)

///////////////////////////////////////   LOOPS   /////////////////////////////////////////

// const list = [1,2,3,4,5]
// let counter = 0
// while - do loop
// start with condition
// while(counter < 5){
//     console.log(list[counter])
//     counter++
// }

// start infinite loop and condition breaks & continue the loop
// while(true){
//     if(counter > 4) break // continue
//     console.log(list[counter])
//     counter++
// }

// do -while loop
// const list = [1,2,3,4,5]
// let counter = 0
// // do first, then check condition
// do{
//     console.log(list[counter] + " in index of " + counter)
//     counter++
// }while(counter < 5)

// const list = ["a","h","m","e","t"]
// // classic for loop
// for(let i = 0; i < list.length; i++){
//     console.log(list[i] + " in index of " + i + "\n")
// }
// // for ..of loop ==> pulling variable
// for(let i of list){
//     console.log(i)
// }
// // pulling index of variable
// for(let i in list){
//     console.log(i)
// }

///////////////////////////////////////   FUNCTIONS   /////////////////////////////////////////

// function sayHello(){
//     console.log("Hello")
// }
// sayHello()

// importing a variable into a function
// function sayHello(name){
//     console.log("Hello " + name)
// }
// sayHello("efe")

// function sayHello(firstname,birthday){
//     console.log("Hello " + firstname + " - your birthday is " + birthday)
//     if(typeof birthday === "number"){
//         return 2022 - birthday
//     }
// }
// const age = sayHello("ahmet efe",2001)
// console.log("age:" + age)

// functions in variables

// functions in function
// const sayHello = (firstname,birthday) =>{
//     const sayAge = (num) => {
//         if(typeof num === "number"){
//             return (2022 - num)
//         }
//     }
//     console.log("Hello " + firstname + " age: " + sayAge(birthday))
// }
// sayHello("efe",2001)

// Arrow functions

// function sayHello(){
//     console.log("Hello")
// }
// let sayHello = function(){ // <== arrow function
//     console.log("Hello")
// }

// const sayHello = () => console.log("Hello") // arrow function

// arrow function if just one command given
// const a1 = (a,b) =>
//     console.log(a + " " + b)

// a1(11,22)

// arrow function if one parameter given
// const a1 = param1 => console.log("param: " + param1)
// a1("efe")

// function return anything if exists just one parameter to return
// let a = (param1) => param1
// console.log(a("efe"))

///////////////////////////////////////   OBJECTS   /////////////////////////////////////////

// creating object with 3 methods
// const human = {

// }
// const human1 = new Object()

// const human2 = Object.create()

// consturctor function of object
// function Car(brand,model){
//     this.brand = brand
//     this.model = model
// }
// const myCar = new Car("fiat","doblo")
// console.log(myCar.brand+" "+myCar.model)

// inheritance of objects
// const car = {
//     "color": "red"
// }
// mycar = car
// mycar.color = "yellow"
// console.log(mycar.color)

// objects can have nested objects
// const car = {
//     color:"red",
//     production_date:2010,
//     brand:{
//         "name":"fiat"
//     }
//     }

// const newcar = car
// newcar.color = "yellow"
// newcar.brand.name = "ford"
// console.log(newcar.brand.name)

// deleting a property from objects
// const car = {
//     color:"red",
//     production_date:2010,
//     brand:{
//         "name":"fiat"
//     }
//     }
// delete car.color <==

// using functions in objects
// const program = {
//     name : "program1",
//     start : () =>{
//         console.log("program has been started!")
//     },
//     finish : () =>{
//         console.log("program has been finished!")
//     },
// }
// pr1 = program
// pr1.start()
// pr1.finish()

///////////////////////////////////////   CLASSES   /////////////////////////////////////////

// // this is an object
// const obj = {}
// // this is a class
// class Obj {}
// const obj1 = new Obj()

// using functions in classes
// class Car {
//     brand
//     model
//     start(){
//         console.log("engine has started")
//     }
//     stop(){
//         console.log("engine has stopped")
//     }
// }

// const car1 = new Car()
// car1.brand = "fiat"
// car1.model = "doblo"
// car1.start()
// car1.stop()

// consturctor functions - initialize the class properties when the class is recreated
// class Person{
//     constructor(name){
//         this.name = name
//     }
//     sayHeloo(){
//         console.log("Hello "+ this.name)
//     }
// }
// person1 = new Person("ahmet efe")
// person1.sayHeloo()

// normally functions can be used in instance of a class, but putting "static" keyword to beginning of the functions
// is to allow that
// class Car{
//     static start(){
//         console.log("engine started")
//     }
// }

// Car.start()

// Inheritance
// class Person {
//     sayHello(){
//         return console.log("Hello")
//     }
// }

// class Me extends Person { // <== extends key is to extend from Person to Me class

// }

// const me1 = new Me()
// me1.sayHello()

///////////////////////////////////////   ASYNCHRONOUS PROGRAMMING AND CALLBACKS   /////////////////////////////////////////

// synchronized programming => a line of code is executed, then the next one is executed, and so on.

/*
Everything  is  as  you  expect,  and  how  it  works  in  most  programming languages.
However there are times when you cannot just wait for a line of code to execute.
You can't just wait 2 seconds for a big file to load, and halt the program completely.
You can't just wait for a network resource to be downloaded, before doing something else.
JavaScript solves this problem using callbacks <<<
*/

// callback function => setTimeout(function(),milisec)
// console.log("before")
// setTimeout(()=>{
//     console.log("Hello")
// },2000)
// console.log("after")

// const fx = callback => {
//     const result = "efe"
//     callback(result)
// }

// fx(a => {
//     console.log(a)
// })

// ---------------Promise-based functions---------------

// const fx = call => {
//     const result = "efe"
//     call(result)
// }

// instead of doing
// fx(res => {
//     console.log(res)
// })

// const fx1 = new Promise()
// // or 
// const fx2 = new Promise(() => {
//     // promise-based function constructor function
// })

// // resolve => Resolving a promise means complete it successfully (which results in calling the  then()  method in who uses it).
// // reject => Rejecting a promise means ending it with an error (which results in calling the  catch()  method in who uses it).

// const fx3 = new Promise((resolve, reject) => {
//     const succes = "yes"
//     if(succes){
//         resolve("ok")
//     }else{
//         reject("error occured!")
//     }

// })

// --------------- Async and Await---------------

// higher level abstraction over promises
// const fx = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>
//             resolve("data"),2000)
//     })
// }
// fx()

// const fx1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>
//             resolve("some data"),2000)
//     })
// }

// ----------<>------------

// const fx2 = async () => {
//     const data = await fx1()
//     console.log(data)
// }

// fx2()

///////////////////////////////////////  VARIABLE SCOPES  /////////////////////////////////////////

// const - let - var
// var => inside  a  function  is  only  visible  inside  that function. Similarly to a function arguments
// let and const => A variable defined as  const  or  let  on the other hand is only visible inside the block where it is defined.

