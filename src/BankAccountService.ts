import { BankAccount } from "./BankAccount";
import { BankAccountCharged } from "./BankAccountCharged";
import { BankAccountCreated } from "./BankAccountCreated";
import { BankAccountDebited } from "./BankAccountDebited";
import { ConcreteEventClass } from "./ConcreteEventBus";
import { Id } from "./Id";
import { Store } from "./Store";



class BankAccountService{
    //to create a new BankAccount
    public create():Id{
        const account = new BankAccount(new Id(0),0);
        const accountId= this.store.add(account);
        this.eventBus.dispach(new BankAccountCreated(accountId));
        this.charge(accountId,5);
        return accountId;
     }
    //to charge the customer's balance
    public charge(accountId:Id,amount:number):void{
        const account = this.store.getById(accountId);
        account.charge(amount);
        this.store.update(account);
        this.eventBus.dispach(new BankAccountCharged(accountId,amount));
    }
    //to withdraw the customer's balance
    public withdraw(accountId:Id,amount:number):void{
        const account = this.store.getById(accountId);
        account.withDraw(amount);
        this.store.update(account);
        this.eventBus.dispach(new BankAccountDebited(accountId,amount));
    }
    //return the customer's balance
    public getBalance(accountId:Id):number{
       return this.store.getById(accountId).getBalance();
    }

    public constructor(private store:Store,private eventBus:ConcreteEventClass){}
}