{
    // Access Modifiers
    class BankAccount {
        readonly id: number;
        name: string;
        protected _balance: number;

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        depositBalance(amount: number) {
            this._balance = this._balance + amount
        }

        getBalance() {
            return this._balance;
        }
    }

    const person1 = new BankAccount(1234, 'Dodul', 90000000000000);

    // person1.depositBalance(10000000000000)
    // console.log(person1);
    // const myBalance = person1.getBalance();
    // console.log(myBalance);


    class Student extends BankAccount {
        test(){
        }
    }
}