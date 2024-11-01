// Type Alias
type Student = {
    name: string,
    age: number,
    gender: string,
    address: string,
    contact?: string,
}

const student1 :Student = {
    name: 'Elon Musk',
    age: 50,
    gender: 'Male',
    address: 'USA'
};

const student2 :Student = {
    name: 'Mark Zuckarbag',
    age: 35,
    gender: 'Male',
    address: 'USA'
};

type UserName = string;
type IsAdmin = boolean;
const userName : UserName = 'ELon';
const isAdminNew : IsAdmin = true;


