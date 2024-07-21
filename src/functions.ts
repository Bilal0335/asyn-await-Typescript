//! Expected Number
function add (a: number, b: number): number {
  return a + b
}

//! Expected String
function greet (name: string): string {
  return `Hello, ${name}`
}

//! Expected Boolean
function powerOutage (light: boolean): void {
  if (light) {
    console.log(`there is lighth`)
  } else {
    console.log(`Power Outage`)
  }
}

//! Expect Array
function custonFind (arr: string[], element: string): boolean | void {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true
    }
  }
}

//! Expect Object
function logPersonName (person: TPerson): void {
  console.log(person.name)
}
type TPerson = {
  name: string
  age: number
}

let person: TPerson = {
  name: 'bilal',
  age: 19
}

logPersonName(person)
