import { Event } from "./Event";
import { Id } from "./Id";

export class BankAccountCreated extends Event{
    public getName(): string {
        return "BankAccountCreated";
    }
    //return the payload
    public getPayload(): { [key: string]: any; } {
        return this.payload;
    }
    //passing the Id to the payload
    public constructor(accountId:Id){
        super();
        this.payload.id=accountId.toNumber();
    }

}