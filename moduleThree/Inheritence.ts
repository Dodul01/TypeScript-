{
    // Inheritence in ts

    class ParentClass {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numberOfHours: number) {
            console.log(`${this.name} sleep for ${numberOfHours} hours.`);
        }
    }


    class Student extends ParentClass {

        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }


    }

    // Instence
    const student1 = new Student('Dodul', 50, 'Chittagong');
    // student1.getSleep(7)
    // console.log(student1.age);

    class Teacher extends ParentClass {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation;
        }

        takeClass(numberOfHours: number) {
            console.log(`${this.name} takes class for ${numberOfHours} everyday.`);
        }
    }

    const teacher = new Teacher('Dodul', 55, 'Chittagong', 'Teacher');

    // console.log(teacher.name);
    // teacher.getSleep(9)
    // teacher.takeClass(5);
}