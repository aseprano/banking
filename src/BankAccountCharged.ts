import { Event } from "./Event";
import { Id } from "./Id";

export class BankAccountCharged extends Event{
    public getName(): string {
        return "BankAccountCharged";
    }
    public getPayload(): { [key: string]: any; } {
        return this.payload;
    }
    //passing the Id and the charged amount to the payload
    public constructor(accountId:Id,amount:number){
        super();
        this.payload.id=accountId;
        this.payload.amount=amount;
        
    }

}