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
        this.balance=this.balance+amount;
    }

    public withDraw(amount:number):void{
        if(this.balance<amount){
            throw new InsufficientBalanceException();
        }

        this.balance=this.balance-amount; 
    }

    public getBalance():number{
        return this.balance;
    }

    public constructor(private id:Id,private balance:number){}

}