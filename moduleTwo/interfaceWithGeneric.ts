
// Interface with generic
{
    interface Developer<T> {
        name: string;
        computer: {
            brand: string;
            modal: string;
            releaseYear: number;
        };
        smartWatch: T;
    }

    const poorDeveloper: Developer<{ name: string, modal: string; price: number }> = {
        name: 'Persian',
        computer: {
            brand: 'HP',
            modal: 'G3',
            releaseYear: 2014,
        },
        smartWatch: {
            name: 'Emlo',
            modal: 'M453',
            price: 2000,
        }
    }

    type SmartWatch = {
        name: string, modal: string; price: number; healthTrach: boolean
    }


    const richDeveloper: Developer<SmartWatch> = {
        name: 'Dodul',
        computer: {
            brand: 'Mac',
            modal: 'M4',
            releaseYear: 2024,
        },
        smartWatch: {
            name: 'Apple Watch',
            modal: 'PRO',
            price: 20000,
            healthTrach: true
        }
    }

    // console.log(poorDeveloper);
    // console.log(richDeveloper);


}