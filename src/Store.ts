import { BankAccount } from "./BankAccount";
import { BankAccountService } from "./BankAccountService";

export class Store{
    accounts : Array<BankAccount> = [];
    accountService : BankAccountService = new BankAccountService();

    get(id : number){
        for(let i = 0; i < this.accounts.length; i++){
            if(this.accounts[i].getId() === id){
                return this.accounts[i]
            }
        }
    }
    add(acccount : BankAccount) {
        this.accounts.push(acccount);
    }
    update(account : BankAccount){
        for(let i = 0; i < this.accounts.length; i++){
            if (this.accounts[i].getId === account.getId){
                //da finire
            }
        }
    }
    delete(id : number){
        for(let i = 0; i < this.accounts.length; i++){
            if(this.accounts[i].getId() === id){
                this.accounts.splice(i, 1);
            }
        }
    }
    
}