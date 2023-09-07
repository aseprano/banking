import { BankAccount } from "./BankAccount";
import { Store } from "./Store";


class BankAccountService{
    public create():number{
        return Math.floor(Math.random() * (999999999999 - 100000000000 + 1) + 100000000000);
    }
    public charge(accountId:number,amount:number):void{

    }
    public withdraw(accountId:number,amount:number):void{

    }
    public getBalance(accountId:number):number{
        const i=new Store();
        return i.getBalance(accountId);
    }
}