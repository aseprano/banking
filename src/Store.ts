import { BankAccount } from "./BankAccount";
import { BankAccountService } from "./BankAccountService";
import { AccountAlreadyExistingException } from "./AccountAlreadyExistingException";
import { AccountNotFindException } from "./AccountNotFindException";

export class Store{
    accounts : Array<BankAccount> = [];
    private lastId = 0;

    get(id : number) : BankAccount{
        for(let i = 0; i < this.accounts.length; i++){
            if(this.accounts[i].getId() === id){
                return this.accounts[i]
            }
        }
        throw new AccountNotFindException();
    }
    add(account : BankAccount) {
        if(account.getId() !== 0){
            throw new AccountAlreadyExistingException();
        }
        const newId = ++this.lastId
        account.setId(newId);
        this.accounts.push(account);
        return newId;
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