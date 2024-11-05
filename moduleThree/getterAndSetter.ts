{
    // Getter and setter
    class BankAccount {
        readonly id: number;
        name: string;
        protected _balance: number;

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        // depositBalance(amount: number) {
        //     this._balance = this._balance + amount
        // }

        // getBalance() {
        //     return this._balance;
        // }

        // Getter
        get balance() {
            return this._balance;
        }
        // Setter 
        set depositBalance(amount: number) {
            this._balance = this.balance + amount;
        }
    }

    const person1 = new BankAccount(1234, 'Dodul', 90000000000000);
    // const personBalance = person1.balance;
    // console.log(personBalance);
    // person1.depositBalance = 100;
    // console.log(person1.balance);
    
    // person1.depositBalance(10000000000000)
    // console.log(person1);
    // const myBalance = person1.getBalance();
    // console.log(myBalance);

}