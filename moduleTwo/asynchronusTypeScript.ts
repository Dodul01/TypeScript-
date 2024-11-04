{
    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }

    const getTodo = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json();
        return data
    }

    //    getTodo().then(data => console.log(data))

    // Condetional Type

    type a1 = number;
    type b1 = string;
    type x = a1 extends null ? true : false;
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }

    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type HasShip = CheckVehicle<'ship'>

    const person3: HasShip = true
    // console.log(person3);
    
}