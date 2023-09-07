export class BankAccount{
    private var id: number;
    private var balance: number;

    public setId(newId:number):void{
        this.id=newId;
    }
    
    public getId():number{
        return this.id;
    }

    public charge(amount:number):void{
        this.balance=this.balance+amount;
    }

    public withDraw(amount:number):void{
        this.balance=this.balance-amount;
    }

    public getBalance():number{
        return this.balance;
    }

}