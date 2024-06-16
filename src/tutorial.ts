/* ---
console.log('Hello from TypeScript')

interface Person {
  username: string
  age: number
}

let engineer: Person = {
  username: 'Imran',
  age: 32
}

console.log(engineer)
--- */

let awesomeName: string = 'shakeAndBake'
// awesomeName = 34

awesomeName = 'testing testing'

let amount: number = 23
amount += 10
// amount = 'reality' ; /** Type String is not assignable to type number */

let isAwesome: boolean = true
console.log(isAwesome)
isAwesome = false

// isAwesome = 'shakeAndBake'

// Challenge:
let color: string = 'red'
color.toUpperCase()

let evenNumber: number = 2
evenNumber += 4

let isRaining: boolean = true
isRaining ? console.log('Raining') : console.log('Not Raining')

/** --- We are assigning a value of different type & TS starts to complain about it --- */

// color = 34
// evenNumber = 'Four'
// isRaining = 1

/** Type Inference in action */
let interviewPreparation = 'Going good'
// interviewPreparation = true

console.log(interviewPreparation, color, evenNumber, isRaining)

// B) Union Types | Multiple Types for a variable
let tax: number | string
tax = 10
tax = '$10'

// C) literal value type (only selected few values possible)
let requestStatus: 'pending' | 'success' | 'error' = 'pending'

requestStatus = 'success'
requestStatus = 'error'
// requestStatus = 'random'

// D) any type
let notSure: any = 4
notSure = 'When to start work'
notSure = false
