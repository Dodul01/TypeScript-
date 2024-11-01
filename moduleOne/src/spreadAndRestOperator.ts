// sperad Operator
const bros: string[] = ['srabon', 'Nobo', 'pritom'];
const bros2: string[] = ['sayem', 'Atick', 'Asif'];

// Push each element to bros array
bros.push(...bros2);


const mentors = {
    typescript: 'Mezba',
    redux: 'Mir',
    dbms: 'Mizan',
}

const mentors2 = {
    prisma: 'Firoz',
    next: 'Tonmoy',
    cloude: 'Nahid',
}

const mentorsList = {
    ...mentors, ...mentors2
};


// Rest Operators
const greetFriends = (...firends: string[]) => {
    firends.forEach((friend: string) => console.log(`Hello ${friend}!`))
}

greetFriends('Elon Musk', 'Mark Zuckarbug', 'Sam Altman', 'Jeff Bezose');


// Destructaring
const userDestructure = {
    name: {
        firstName: 'Mozammel',
        middleName: 'Hoque',
        lastName: 'Dodul',
    },
    contact: '0160000000',
    address: 'USA'
}

const { contact, name: { lastName: nickName } } = userDestructure;

// Array Destructuring:
const products = ['phone', 'laptop', 'headphone', 'airbut', 'keybord', 'mouce'];
const [, , myHeadphone, ...rest] = products;
