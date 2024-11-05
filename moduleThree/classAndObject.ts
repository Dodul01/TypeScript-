{
    // Class and Object
    class Animal {
        name: string;
        species: string;
        sound: string;

        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }

    }

    const dog = new Animal('Bangla Dog', 'Dog', 'Ghaw Ghaw');
    const cat = new Animal('Pussy Cat', 'cat', 'Meaw Meaw');
    // console.log(dog.sound);
    // console.log(cat.sound);
    // dog.makeSound();
    // cat.makeSound();

    // Modefier
    class AnimalNew {
        constructor(public name: string, public species: string, public sound: string) { }
    
        makeSond(){
            console.log(`The ${this.name} says ${this.sound}.`);
        }
    }

    const dogNew = new AnimalNew('Dog', 'dog', 'ghew')
    const catNew = new AnimalNew('Cat', 'cat', 'meaw')
    // console.log(dogNew.name);
    // console.log(catNew.sound);
    // dogNew.makeSond()
}