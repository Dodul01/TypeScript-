{
    const addCourseToStudent = <T extends { id: string, name: string, roll: string, email: string }>(student: T) => {
        const course = "Next Level Web Development";

        return {
            ...student,
            course
        }
    }

    // console.log(addCourseToStudent({id: 'lkajsflkj3ru92',  name: 'Dodul', roll: 'W1224', email: 'dodul@gmail.com' }));

    // generic Constrint with keyOf operator;

    type Vehicale = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = keyof Vehicale;
    const person1: Owner = 'bike';
    const person2: Owner = 'ship';
    // console.log({ person1, person2 });


    const getPropertyValue = <X, Y extends keyof X>(Obj: X, key: Y) => {
        return Obj[key];
    }

    const car = {
        modal: 'Toyota 100',
        year: 2000
    }

    const getResult = getPropertyValue(car, "modal");

    // console.log({ getResult });

}