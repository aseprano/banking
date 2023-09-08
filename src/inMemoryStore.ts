import { BankAccount } from "./BankAccount";
import { BankAccountNotFoundException } from "./BankAccountNotFoundException";
import { Id } from "./Id";
import { Store } from "./Store";

class InMemoryStore implements Store{
   //to get an account by Id
    public getById(id: Id): BankAccount {
       const account=this.accounts.get(id.toNumber());
       if(account==undefined) {
            throw new BankAccountNotFoundException();
       }
       
       return account;
    }
   //to add an account to the MemoryStore
    public add(bankAccount: BankAccount): Id {
        if(bankAccount==undefined){
            throw new BankAccountNotFoundException();
        }
        const accountId=new Id(this.lastId+1);
        this.lastId++;
        bankAccount.setId(accountId);
        this.accounts.set(bankAccount.getId().toNumber(),bankAccount);
        return accountId;
    }
   //to update an account
    public update(bankAccount: BankAccount): void {
        if(bankAccount==undefined){
            throw new BankAccountNotFoundException;
        }

            this.accounts.set(bankAccount.getId().toNumber(),bankAccount);
    }
   //to delete an account
    public delete(id: Id): void {
        const account=this.accounts.get(id.toNumber());
        if(account==undefined){
            throw new BankAccountNotFoundException;
        }

        this.accounts.delete(id.toNumber());
    }

    private accounts=new Map<number,BankAccount>();
    private lastId=0;
}