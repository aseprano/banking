import { BankAccount } from "./BankAccount";
import { Store } from "./Store";
import { Event } from "./Event";
import { EventBus } from "./EventBus";

export class BankAccountService{
    accounts : Store = new Store;

    constructor(private eventbus : EventBus){
        
    }

    create(){
        let account = new BankAccount();
        const id = this.accounts.add(account);
        this.eventbus.dispatch(new FinalEvent("create", [id]));
        this.charge(id, 5);
    }
    charge(accountID : number, amount : number){
        const account = this.accounts.get(accountID);
        account.charge(amount);
        this.accounts.update(account);
        this.eventbus.dispatch(new FinalEvent("charge", [accountID, amount]));
    }
    withdraw(accountID : number, amount : number){
        const account = this.accounts.get(accountID);
        account.withdraw(amount);
        this.accounts.update(account);
        this.eventbus.dispatch(new FinalEvent("withdraw", [accountID, amount]));
    }
    getBalance(accountID : number){
        return this.accounts.get(accountID)?.getBalance();
    }
}

export class FinalEvent implements Event{
    name: string;
    payload: { [key: string]: any; };
    date: string = Date().toString();
    
    constructor(name : string, payload : { [key: string]: any; }){
        this.name = name;
        this.payload = payload;
    }
}