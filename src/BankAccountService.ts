import { BankAccount } from "./BankAccount";
import { Store } from "./Store";
import { Event } from "./Event";

export class BankAccountService{
    accounts : Store = new Store;
    finalEvent : FinalEvent | undefined;

    create(){
        let max = 10000;
        let id = Math.floor(Math.random() * (max + 1));
        while(true){
            let check = false;
            for(let i = 0; i < this.accounts.accounts.length; i++){
                if(this.accounts.accounts[i].getId() === id){
                    id = Math.floor(Math.random() * (max + 1));
                    check = false;
                    break;
                }
                else{
                    check = true;
                }
            }
            if(check){
                break;
            }
        }
        let account = new BankAccount();
        account.setId(id)
        this.accounts.add(account);
        this.finalEvent = new FinalEvent("create", [id]);
    }
    charge(accountID : number, amount : number){
        for(let i = 0; i < this.accounts.accounts.length; i++){
            if(this.accounts.accounts[i].getId() === accountID){
                this.accounts.accounts[i].charge(amount);
            }
        }
        this.finalEvent = new FinalEvent("charge", [accountID, amount]);
    }
    withdraw(accountID : number, amount : number){
        for(let i = 0; i < this.accounts.accounts.length; i++){
            if(this.accounts.accounts[i].getId() === accountID){
                if(this.accounts.accounts[i].getBalance() < amount){
                    break;
                }
                else{
                    this.accounts.accounts[i].withdraw(amount);
                }
            }
        }
        this.finalEvent = new FinalEvent("withdraw", [accountID, amount]);
    }
    getBalance(accountID : number){
        for(let i = 0; i < this.accounts.accounts.length; i++){
            if(this.accounts.accounts[i].getId() === accountID){
                return this.accounts.accounts[i].getBalance();
            }
        }
        this.finalEvent = new FinalEvent("getBalance", [accountID]);
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