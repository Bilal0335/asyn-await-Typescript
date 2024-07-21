// // console.log('one')

import { rejects } from 'assert'
import { resolve } from 'path'

// // setTimeout(function () {
// //   console.log('Hello world')
// // }, 2000)

// //? or
// // function greet () {
// //   console.log('Hello World')
// // }

// // setTimeout(greet, 2000)

// // console.log('Two')

// //! Complex
// function washing (callback: () => void) {
//   console.log('Washing started...')
//   setTimeout(() => {
//     console.log('Washing done!')
//     callback()
//   }, 5000)
// }
// function soaking (callback: () => void) {
//   console.log('Soaking started...')
//   setTimeout(() => {
//     console.log('Soaking done!')
//     callback()
//   }, 3000)
// }
// function drying () {
//   console.log('Drying started...')
//   setTimeout(() => {
//     console.log('Drying done!')
//   }, 2000)
// }
// console.log('Folding Laundry')

// washing(() => {
//   soaking(() => {
//     drying()
//   })
// })

// console.log('I am making Biryani')

//? Example 02
function washing () {
  console.log('Washing Started...')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Washing Done!')
    }, 5000)
  })
}
function soaking () {
  console.log('Soaking Started...')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Soaking Done!')
    }, 3000)
  })
}
function drying () {
  console.log('Drying Started...')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Drying Done!')
    }, 2000)
  })
}

washing()
  .then(val => {
    console.log(val)
    return soaking()
  })
  .then(val => {
    console.log(val)
    return drying()
  })
  .then(val => {
    console.log(val)
  })
  .catch(error => {
    console.log(error)
  })
