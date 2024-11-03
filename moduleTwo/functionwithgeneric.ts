{
    // Function with generic

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    interface User {
        id: number; name: string;
    }

    // console.log(createArrayWithGeneric<boolean>(true));
    // console.log(createArrayWithGeneric<string>('Bangladesh'));
    // console.log(createArrayWithGeneric<number>(2));
    // console.log(createArrayWithGeneric<User>({ id: 1, name: 'Mozammel Hoque Dodul' }));

    // Create array with tuple
    const createArrayWithTuple = <T, Q>(param: T, param2: Q): [T, Q] => {
        return [param, param2];
    }

    // console.log(createArrayWithTuple<number[], { name: string; roll: number }>([1, 2], { name: 'Basic Ali', roll: 1000 }));

    const addCourseToStudent = <T>(student: T) => {
        const course = {
            _id: 'lkaje950fjklcj298502ufjwejr92835023',
            name: 'Next Level Web Development',
            duration: '6 Month',
            price: 6500
        }

        return {
            ...student,
            course
        }
    }

    const student = addCourseToStudent({ name: 'Mozammel Hoque Dodul', email: 'test@gmail.com', isValid: true });
    const student1 = addCourseToStudent({ name: 'MR Y', email: 'y@gmail.com', isValid: true });

    console.log(student);
    console.log(student1);

}