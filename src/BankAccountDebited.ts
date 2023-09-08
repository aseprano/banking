import { Event } from "./Event";
import { Id } from "./Id";

export class BankAccountDebited extends Event{
    public getName(): string {
        return "BankAccountDebited";
    }
    public getPayload(): { [key: string]: any; } {
        return this.payload;
    }
    //passing the Id and the withdraw amount to the payload
    public constructor(accountId:Id,amount:number){
        super();
        this.payload.id=accountId;
        this.payload.amount=amount;
    }

}