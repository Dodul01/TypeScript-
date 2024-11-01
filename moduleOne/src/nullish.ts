// Nullish Coalescing Operator
const isAuthenticated = null;

const userStatus = isAuthenticated ?? 'Guest';

console.log({ userStatus })