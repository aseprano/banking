import { BankAccount } from "./BankAccount";
import { Id } from "./Id";
import { Store } from "./Store";


class BankAccountService{
    public create():Id{
        const account = new BankAccount(new Id(0),0);
        return this.store.add(account);
    }
    public charge(accountId:Id,amount:number):void{
        const account = this.store.getById(accountId);
        account.charge(amount);
        this.store.update(account);
    }
    public withdraw(accountId:Id,amount:number):void{
        const account = this.store.getById(accountId);
        account.withDraw(amount);
        this.store.update(account);
    }
    public getBalance(accountId:Id):number{
       return this.store.getById(accountId).getBalance();
    }

    public constructor(private store:Store){}
}