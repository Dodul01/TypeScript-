{
    const rollNumber: Array<number> = [3, 4, 5];
    // console.log(rollNumber);
    const mentors: Array<string> = ['Mr x', 'Mr y', 'Mr z'];
    // console.log(mentors);
    const booleanArray: Array<boolean> = [true, false, true];
    // console.log(booleanArray);

    // Dynamic Type
    type GenericArrayWithParams<T> = Array<T>;

    const rollNumber1: GenericArrayWithParams<number> = [1, 2, 3, 4];
    // console.log(rollNumber1);

    const mentors1: GenericArrayWithParams<string> = ['MR x', 'MR y', 'MR z'];
    // console.log(mentors1);

    const booleanArray1: GenericArrayWithParams<boolean> = [true, false, true];
    // console.log(booleanArray1);

    const user: GenericArrayWithParams<{ name: string, email: string }> = [
        {
            name: 'Elon',
            email: 'elon@gmail.com'
        },
        {
            name: 'Sam',
            email: 'sam@gmail.com'
        }
    ];

    // console.log(user);

    // Generic tuple

    type GenericTuple<X, Y> = [X, Y];
    const manush: GenericTuple<string, string> = ['MR X', 'Mr Y'];

    // console.log(manush);

    const userWithId: GenericTuple<number, { name: string; email: string; phoneNumber: number }> = [1234, {
        name: 'Dodul', email: 'abc@gmail.com', phoneNumber: 1234
    }];

    // console.log(userWithId);
    
    
}