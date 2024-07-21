# Async/Await in TypeScript

Asynchronous programming in TypeScript is simplified using "async" and "await". These keywords allow you to write asynchronous code that looks and behaves more like synchronous code, making it easier to read and maintain.

# Basic Concepts
Async Functions
An async function always returns a Promise. The await keyword can only be used inside an async function to wait for a promise to resolve or reject.

# Await
The await keyword pauses the execution of the async function and waits for the promise to resolve. Once resolved, it returns the result of the promise. If the promise is rejected, an error is thrown.

# Example 1: Simple Functions
## Expected Number
function add(a: number, b: number): number {
  return a + b;
}

## Expected String
function greet(name: string): string {
  return `Hello, ${name}`;
}

## Expected Boolean
function powerOutage(light: boolean): void {
  if (light) {
    console.log('There is light');
  } else {
    console.log('Power Outage');
  }
}

## Expected Array
function customFind(arr: string[], element: string): boolean | void {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
}

## Expected Object
type TPerson = {
  name: string;
  age: number;
};

function logPersonName(person: TPerson): void {
  console.log(person.name);
}

let person: TPerson = {
  name: 'Bilal',
  age: 19,
};

logPersonName(person);

# Example 2: Callback Functions

function parentFunction(func: () => void) {
  console.log("I'm the parent function");
  func();
}

function childFun() {
  console.log("I'm the callback function");
}

parentFunction(childFun);

# Example 3: Async/Await with Promises
## Complex Example Using Callbacks
function washing(callback: () => void) {
  console.log('Washing started...');
  setTimeout(() => {
    console.log('Washing done!');
    callback();
  }, 5000);
}

function soaking(callback: () => void) {
  console.log('Soaking started...');
  setTimeout(() => {
    console.log('Soaking done!');
    callback();
  }, 3000);
}

function drying() {
  console.log('Drying started...');
  setTimeout(() => {
    console.log('Drying done!');
  }, 2000);
}

console.log('Folding Laundry');

washing(() => {
  soaking(() => {
    drying();
  });
});

console.log('I am making Biryani');


## Converting to Promises
function washing(): Promise<string> {
  console.log('Washing Started...');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Washing Done!');
    }, 5000);
  });
}

function soaking(): Promise<string> {
  console.log('Soaking Started...');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Soaking Done!');
    }, 3000);
  });
}

function drying(): Promise<string> {
  console.log('Drying Started...');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Drying Done!');
    }, 2000);
  });
}

washing()
  .then(val => {
    console.log(val);
    return soaking();
  })
  .then(val => {
    console.log(val);
    return drying();
  })
  .then(val => {
    console.log(val);
  })
  .catch(error => {
    console.log(error);
  });

# Using Async/Await

async function runWashingMachine(): Promise<void> {
  try {
    const result1 = await washing();
    console.log(result1);

    const result2 = await soaking();
    console.log(result2);

    const result3 = await drying();
    console.log(result3);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('I will run anyway');
  }
}

console.log('Folding Laundry');

runWashingMachine();

console.log("I'm making Biryani");

# Conclusion
Using async and await makes it easier to work with asynchronous code in TypeScript. It allows for writing cleaner, more readable code compared to traditional promise chains or callback-based approaches.

