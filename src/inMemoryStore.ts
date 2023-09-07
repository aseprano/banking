import { BankAccount } from "./BankAccount";
import { BankAccountNotFoundException } from "./BankAccountNotFoundException";
import { Id } from "./Id";
import { Store } from "./Store";

class InMemoryStore implements Store{
    public getById(id: Id): BankAccount {
       const account=this.accounts.get(id.toNumber());
       if(account==undefined) {
            throw new BankAccountNotFoundException();
       }
       
       return account;
    }

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

    public update(bankAccount: BankAccount): void {
        if(bankAccount==undefined){
            throw new BankAccountNotFoundException;
        }

            this.accounts.set(bankAccount.getId().toNumber(),bankAccount);
    }

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