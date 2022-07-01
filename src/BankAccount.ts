import { BankAccountService } from "./BankAccountService";
import { InsufficientFunsException } from "./InsufficientFundsExcpetion";

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
        if(this.balance < amount){
            throw new InsufficientFunsException();
        }
        this.balance -= amount;
    }
    getBalance(){
        return this.balance;
    }
}