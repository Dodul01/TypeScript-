const firstName: string = 'Elon Musk'; //string
const roll: number = 1; // Number
const isAdmin: boolean = true; // Boolean
const user: undefined = undefined; //Undefined
const x: null = null // Null
let a: number;
a = 21

// array
const friends: string[] = ['Elon', 'Nikola', 'Dodul'];
const rollList: number[] = [10, 1];

// Tuple
let coardinates: [number, number] = [1, 5];
let tupleUser: [string, number] = ["Dodul", 23];

// Object
const objectUser : {
    firstName: string;
    middleName: string;
    lastName: string;
} = {
    firstName: 'Mozammel',
    middleName: 'Hoque',
    lastName: 'Dodul',
}

// Optional Type
const optionalTypetUser : {
    firstName: string;
    middleName?: string;
    lastName: string;
} = {
    firstName: 'Elon',
    lastName: 'Musk',
}

// Initial Type
const initialTypeUser : {
    firstName?: string;
    middleName?: string;
    lastName: string;
    readonly company: 'Vision Reality';
} = {
    firstName: 'Mozammel',
    middleName: 'Hoque',
    lastName: 'Dodul',
    company: 'Vision Reality'
};

