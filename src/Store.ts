import { BankAccount } from "./BankAccount";
import { Id } from "./Id";

export abstract class Store{
    public abstract getById(id:Id):BankAccount;
    public abstract add(bankAccount:BankAccount):Id;
    public abstract update(bankAccount:BankAccount):void;
    public abstract delete(id:Id):void;
}