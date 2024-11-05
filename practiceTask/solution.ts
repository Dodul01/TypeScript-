// Task 1: Basic Data Types and First Program
// Objective: Write a TypeScript program that outputs a welcome message.

const greeting: string = 'Welcome to TypeScript practice task.';

// console.log(greeting);


// Create a TypeScript program.
// Print the following message to the console:
// Hello World, I will complete this course successfully and become a Next level Web Developer!

// Task 2: Functions, Optional, and Literal Types
// Objective: Create a function with parameters and an optional literal type.

type MessageType = {
    greeting?: 'Hello World' | 'Hi' | 'Hola';
    message: string;
}

const myFunc = (msg: MessageType): string => {
    return `${msg.greeting}${msg.message}`
}

// console.log(myFunc({ greeting: 'Hello World', message: ', I will complete this course successfully and become a Next level Web Developer!' }));


// Define a function that takes:
// name (string)
// age (number)
// role (optional, with type 'admin' | 'user' | 'guest')
// The function should log these values or perform a basic action.
// Task 3: Object Types, Type Alias, & Literal Types
// Objective: Define a structured Person object using Type Aliases.

type Person = {
    name: string;
    age: number;
    role?: 'admin' | 'user' | 'guest'
}

const printPersonInfo = (person: Person): string => {
    return `Name : ${person.name}, Age: ${person.age}, Role: ${person?.role}`;
}

const person1: Person = {
    name: 'Mozammel Hoque Dodul',
    age: 12,
    role: 'guest',
}

// console.log(printPersonInfo(person1));


// Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.
// Task 4: Union and Intersection Types
// Objective: Create union and intersection types using interfaces.

type HumanBody = {
    name: string;
    address: string;
    hair: string;
    eyeColor: 'Red' | 'Green' | 'Blue' | 'Black';
}

interface PersonalFinance extends HumanBody {
    income: number;
    expense: number;
}

interface PersonalDetails extends PersonalFinance {
    hobbies: string;
    familyMembers: string[];
    job: string;
    skills: string[];
    maritalStatus: boolean;
    friends: string[];
}

const mainUser: PersonalDetails = {
    name: 'Rohim',
    address: 'ctg',
    hobbies: 'Play Video Game',
    familyMembers: ['b', 'a', 'daf'],
    job: 'Full stack Developer',
    skills: ['React', 'Node', 'Express', 'Mongodb'],
    maritalStatus: false,
    friends: ['asd', 'adf', 'adf'],
    income: 2000000,
    expense: 1000,
    hair: 'Long Hair',
    eyeColor: 'Black'
}

// console.log(mainUser);

// Define interfaces Book and Magazine.
// Create:
// A type that is a union of Book and Magazine.
// A type that is an intersection of Book and Magazine.
// Task 5: Function Type
// Objective: Write a function that reverses a string.

interface Book {
    name: string;
    author: string;
    isReleased: boolean;
    releaseYear: number;
    genre: string;
}

interface Magazine {
    name: string;
    publisher: string;
    isReleased: boolean;
    releaseYear: number;
    issue: number;
}

type CurrentlyReading = Book | Magazine;
type BookBox = Book & Magazine;


const currentItem: CurrentlyReading = {
    name: 'Test Book',
    author: 'Test Author',
    isReleased: true,
    releaseYear: 2024,
    genre: 'Commic'
};

const myBookBox: BookBox = {
    name: 'my book',
    author: 'mr x',
    isReleased: false,
    releaseYear: 2074,
    genre: 'lkjasdfk',
    publisher: 'lkjasdfklj',
    issue: 6
};


// Function to reverse a string
const reverseString = (input: string): string => {
    return input.split('').reverse().join('');
};

// Example usage
const originalString = "Hello, TypeScript!";
console.log(`Original: ${originalString}`);
console.log(`Reversed: ${reverseString(originalString)}`);


// Write a function reverseString that:
// Takes a single string argument.
// Returns the string in reverse order.
// Example:
// Input: "hello"
// Output: "olleh"
// Task 6: Spread and Rest Operators, Destructuring
// Objective: Write a function that uses the rest operator for variable-length arguments.