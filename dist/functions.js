//! Expected Number
function add(a, b) {
    return a + b;
}
//! Expected String
function greet(name) {
    return `Hello, ${name}`;
}
//! Expected Boolean
function powerOutage(light) {
    if (light) {
        console.log(`there is lighth`);
    }
    else {
        console.log(`Power Outage`);
    }
}
//! Expect Array
function custonFind(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
}
//! Expect Object
function logPersonName(person) {
    console.log(person.name);
}
let person = {
    name: 'bilal',
    age: 19
};
logPersonName(person);
export {};
