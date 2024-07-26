// function washing () {
//   console.log('Washing Started...')
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Washing Done!')
//     }, 5000)
//   })
// }
// function soaking () {
//   console.log('Soaking Started...')
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Soaking Done!')
//     }, 3000)
//   })
// }
// function drying () {
//   console.log('Drying Started...')
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Drying Done!')
//     }, 2000)
//   })
// }
// //* first method try catch
// async function runWashingMachine () {
//   try {
//     const result1 = await washing() //invoke kia
//     console.log(result1)
export {};
//     const result2 = await soaking()
//     console.log(result2)
//     const result3 = await drying()
//     console.log(result3)
//   } catch (error) {
//     console.log(error)
//   } finally {
//     console.log('I will run anyway')
//   }
// }
// console.log('foldin luandry')
// runWashingMachine()
// console.log("I'm makin biryani")
//* second method simple
// async function runWashingMachine () {
//   const result1 = await washing() //invoke kia
//   console.log(result1)
//   const result2 = await soaking()
//   console.log(result2)
//   const result3 = await drying()
//   console.log(result3)
// }
// runWashingMachine()
