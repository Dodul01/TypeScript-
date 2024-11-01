// Nullish Coalescing Operator
const isAuthenticated = null;

const userStatus = isAuthenticated ?? 'Guest';

// console.log({ userStatus })
type User = {
    name: string;
    address: {
        city: string;
        road: string;
        presentAddress: string;
        parmanentAddress?: string;
    }
}

const nullishUser: User = {
    name: 'Mozammel Hoque Dodul',
    address: {
        city: 'Chittagon',
        road: 'Sekh Mojib Road',
        presentAddress: 'Sekh Mojib Road'
    }
}
const parmanentAddressChecking = nullishUser?.address?.parmanentAddress ?? "This user dosen't have any parmanent address.";

// console.log({ parmanentAddressChecking })