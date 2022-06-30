import { BankAccountService } from "./BankAccountService";

export class BankAccount{
    id: number = 0;
    balance : number = 5;

    getId() {
        return this.id;
    }
    setId(id : number){
        this.id = id;
    }
    charge(amount : number){
        this.balance += amount;
    }
    withdraw(amount : number){
        this.balance -= amount;
    }
    getBalance(){
        return this.balance;
    }
}