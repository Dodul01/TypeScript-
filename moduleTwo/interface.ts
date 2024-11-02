type User1 = {
    name: string;
    age: number;
}

interface User2 {
    name: string;
    age: number;
}

// Intersection with type alieas
type UserWithRole1 = User1 & { role: string };

// Intersection with interface
interface UserWithRole2 extends User2 {
    role: string
}

const typeUser: UserWithRole1 = {
    name: 'Dodul',
    age: 22,
    role: 'Class Captine',
}

const typeUser2: UserWithRole2 = {
    name: 'Dodul',
    age: 22,
    role: 'Class Captine',
}

type Roll = number[];

interface Roll2 {
    [index: number]: number
}

const rollNumber: Roll = [1, 2, 3, 4,]

type Add1 = (num1: number, num2: number) => number;

interface Add2 {
    (num1: number, num2: number): number
};

const addNew: Add2 = (num1, num2) => num1 + num2;