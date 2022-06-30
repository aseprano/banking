import { BankAccount } from "./BankAccount";
import { Store } from "./Store";

export class BankAccountService{
    accounts : Store = new Store;

    create(){
        let max = 10000;
        let id = Math.floor(Math.random() * (max + 1)); //rivedere assegnazione id
        let account = new BankAccount();
        account.setId(id)
        this.accounts.add(account);
    }
    charge(accountID : number, amount : number){
        for(let i = 0; i < this.accounts.accounts.length; i++){
            if(this.accounts.accounts[i].getId() === accountID){
                this.accounts.accounts[i].charge(amount);
            }
        }
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
    }
    getBalance(accountID : number){
        for(let i = 0; i < this.accounts.accounts.length; i++){
            if(this.accounts.accounts[i].getId() === accountID){
                return this.accounts.accounts[i].getBalance();
            }
        }
    }
}