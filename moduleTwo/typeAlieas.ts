// Type assertion
let anything: any;

anything = 'Hello world!';

anything = 222;

(anything as number)


const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
        const convertedValue = parseFloat(value) * 1000;
        return `The Converted Value Is ${convertedValue}gm.`;
    }
    if (typeof value === "number") {
        return value * 1000
    }
}

const result1 = kgToGm(3) as number;
const result2 = kgToGm('20') as string;

