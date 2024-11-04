{
    type AreaNumber = {
        height: number;
        widht: number;
    }
    type AreaString<T> = {
        [key in keyof T]: T[key]
    }

    const area1: AreaString<{ height: string; width: number }> = {
        height: '100',
        width: 30
    }
    // console.log(area1);

}