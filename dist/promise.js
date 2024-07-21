// const promise = new Promise((resolve, reject) => {
//   //   resolve("Sucess")
//     reject('Error')
// })
// // console.log(promise);
// promise
//   .then(val => {
//     console.log(val)
//   })
//   .catch(err => {
//     console.log(err)
//   })
//* Example 02
const returnMoney = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Money Returned')
        reject('Failure!!!');
    }, 3000); //suppose 3000 mean wednsday
});
returnMoney
    .then(val => {
    console.log(val);
    console.log('Thank You for returning Money');
})
    .catch(val => {
    console.log(val);
    console.log(`Sorry, I'm are unable to return money`);
}) //* chaining method
    .finally(() => {
    console.log("I won't give money");
});
export {};
//finally ka mtlb hy resolev aur reject chaly ya na chaly finally zaroor chaly ka
