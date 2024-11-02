//* Basic Types: number, string, boolean, null, undefined *//

/*
    Problem

    1.Create a function that takes in two numbers and returns their product.
    2.Write a function that checks if a given string is a palindrome.
    3.Implement a function that takes a boolean parameter and returns "Yes" if true and "No" if false.
    4.Create a variable with an initial undefined type and then assign a value of type string to it.
    5.Define a variable of type null and use it in a function.
*/
{
    // Create a function that takes in two numbers and returns their product.
    // 1: solution
    const products: string[] = ['Phone', 'Laptop', 'Airpod', 'Keybord', 'Mouce', 'Headphone', 'Microphone'];

    const showProduct = (a: number, b: number): string[] => {
        const filteredProducts = [products[a], products[b]];
        return filteredProducts;
    }
    // console.log(showProduct(4, 6));

    // Problem 2.Write a function that checks if a given string is a palindrome.
    // 2: Solution

    const checkPalindrome = (word: string): boolean => {
        const words = word.split('');
        const backwards = [];

        for (let i = words.length - 1; i >= 0; i--) {
            backwards.push(words[i]);
        }

        if (backwards.join('') === word) {
            return true;
        } else {
            return false;
        }
    }

    // console.log(checkPalindrome("kayak"));

    // Problem 3.Implement a function that takes a boolean parameter and returns "Yes" if true and "No" if false.
    // Solution:

    const checkBoolean = (isBoolean: boolean): string => {
        if (isBoolean) {
            return 'Yes'
        } else {
            return 'No'
        }
    }

    // console.log(checkBoolean(false));

}