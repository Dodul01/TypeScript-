type FrontendDeveloper = 'CheepDeveloper' | 'juniorDeveloper'
type FullStackDeveloper = 'frontendDeveloper' | 'expartDeveloper'
type Developer = FrontendDeveloper | FullStackDeveloper;

const newDeveloper: FrontendDeveloper = 'juniorDeveloper';

type UnionUser = {
    name: string;
    email?: string;
    gender: 'Male' | 'Female';
    bloodGroup: 'O+' | 'B+';
}

const newUserUnior: UnionUser = {
    name: 'Mozammel Hoque Dodul',
    email: 'test@gmail.com',
    gender: 'Male',
    bloodGroup: 'B+',
}
const newUserUnior2: UnionUser = {
    name: 'Lola Marina',
    gender: 'Male',
    bloodGroup: 'O+',
}


type FrontendDeveloperFull = {
    skills: string[];
    designation1: 'Frontend Developer'
}

type BackendDeveloperFull2 = {
    skills: string[];
    designation1: 'Backend Developer'
}
type FullStackDeveloperFull = FrontendDeveloper & BackendDeveloperFull2

// const fullstackdeveloperVeryNew: FullStackDeveloperFull = {
//     skills: ['HTML', 'CSS', 'JS', 'Node.js']
//     ,
//     designation1: 'Backend Developer',
// }