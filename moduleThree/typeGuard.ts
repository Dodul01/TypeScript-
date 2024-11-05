{
    // Type Guard
    type AlphaNumaric = number | string;
    // Type guard with typeof operators
    const add = (number1: AlphaNumaric, number2: AlphaNumaric): AlphaNumaric => {
        if (typeof number1 === 'number' && typeof number2 === 'number') {
            return Number(number1 + number2);
        } else {
            return number1.toString() + number2.toString();
        }
    }

    const result = add(44, 0);
    // console.log(result);

    // type gurad with type in 

    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: 'admin';
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`My name is ${user.name} and i'm ${user.role}.`);
        } else {
            console.log(`My name is ${user.name}.`)
        }
    }
    const user1: AdminUser = {
        name: 'Dodul',
        role: 'admin'
    }

    const normalUser: NormalUser = {
        name: 'Abul'
    }

    // getUser(normalUser);
    // getUser(user1)

    // Type guard using instance of
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log('Im making sound');
        }
    }

    class Dog extends Animal {

        constructor(name: string, species: string) {
            super(name, species);
        }

        makeBark() {
            console.log('Dog Burk Ghaw Ghaw!');
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeMeaw() {
            console.log('Cat say Meaw Meaw!');
        }
    }

    const dog = new Dog('Kayle', 'dog');
    const cat = new Cat('Jener', 'cat');

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            // animal.makeBark()
            animal.makeBark()
        } else if (isCat(animal)) {
            // animal.makeMeaw();
            animal.makeMeaw()
        } else {
            animal.makeSound();
        }
    }

    getAnimal(dog);
    getAnimal(cat);
}