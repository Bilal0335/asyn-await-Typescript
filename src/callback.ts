// function parentFunction (func: () => void) {
//   console.log(`I'm the parent function`)
//   func() //childFunction
// }

// function childFun () {
//   console.log(`I'm The call Back function`)
// }

// parentFunction(childFun)

//? 0r

// parentFunction(function () {
//   console.log(`I'm the call back function`)
// })

//* example 02

// function processUserInput (callback: any) {
//   console.log('hello hey')
//   let name = 'Bilal'
//   callback(name)
// }

// processUserInput(function (name:string) {
//   console.log('i am fine '+name)
// })

//* example 03

// function processUserInput (callback: (name: string) => void) {
//   let name = 'bilal'
//   callback(name)
// }
// function nameCall (name:string) {
//   console.log('hello ' + name)
// }
// processUserInput(nameCall)

//* example 04
// function helloFun (cb: any) {
//   cb("Bilal")
// }

// function arrow (name:string) {
//   console.log('Hello ',name)
// }

// helloFun(arrow)

//* example 05
// function helloFun (cb: any, newName: string) {
//   cb(newName)
// }

// function arrow (newName:string) {
//   console.log('Hello ' + newName)
// }

// helloFun(arrow,'Sarmad')

//* example 06
// function add (call: (result: number) => void) {
//   let a = 88
//   let b = 77
//   call(a + b)
// }

// function sumAll (resultSum: number) {
//   console.log(resultSum)
// }

// add(sumAll)
