const searchName = (value: string | null) => {
    if (value) {
        console.log('Searching...');
    } else {
        console.log('There is nothing to search.');
    }
}

// searchName(null)


// unknown type
const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value == 'number') {
        // Logic
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed} ms^-1.`);

    }else if (typeof value == 'string') {
        const [num, unit] = value.split(' ');
        const convertedSpeed = (Number(num) * 1000) / 3600;
        console.log(convertedSpeed);
    }else{
        console.log('Wrong Inpt')
    }
}


// getSpeedInMeterPerSecond()
