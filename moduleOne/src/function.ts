// Function in typescript
function add(a: number, b: number): number {
    return a + b
}

add(2, 4);

// arrow function with default value
const addArrow = (x: number, y: number = 10): number => {
    return x + y;
}

addArrow(6, 5);


// object function method

const userObject = {
    name: 'Mozammel Hoque Dodul',
    balance: 0,
    addBalance(balance: number): string {
        return `My new balance ${this.balance + balance}TK`;
    },
}

const arr: number[] = [1, 2, 3, 4];
const squiredArray = arr.map((element: number): number => element * element);