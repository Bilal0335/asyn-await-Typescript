console.log('Start');
let userName = 'Bilal Hussain';
console.log(userName);
let age = 18;
if (age < 18) {
    console.log('You are not adult');
}
else {
    console.log('You are adult');
}
const bestFriend = ['Hamza', 'Junaid', 'David', 'John'];
for (let i = 0; i < bestFriend.length; i++) {
    console.log(`${bestFriend[i]} is my best bestFriend.`);
}
let car = {
    brand: 'Toyota',
    model: 'Carolla',
    isUsed: false,
    year: 2020
};
console.log(car.brand);
console.log(car['model']);
console.log('The End');
export {};
