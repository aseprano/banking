import { Id } from "./Id";
import { InsufficientBalanceException } from "./InsufficientBalanceException";

export class BankAccount{

    public setId(newId:Id):void{
        this.id=newId;
    }
    
    public getId():Id{
        return this.id;
    }

    public charge(amount:number):void{
        if(amount<0){
            throw new Error("amount cannot be negative");
        }
        this.balance=this.balance+amount;
    }

    public withDraw(amount:number):void{
        if(amount<0){
            throw new Error("amount cannot be negative");
        }
        if(this.balance<amount){
            throw new InsufficientBalanceException();
        }

        this.balance=this.balance-amount; 
    }

    public getBalance():number{
        return this.balance;
    }

    public constructor(private id:Id,private balance:number){
        if(balance<0){
            throw new InsufficientBalanceException();
        }5
    }

}