import { Event } from "./Event";
import { Id } from "./Id";

export class BankAccountCreated extends Event{
    public getName(): string {
        return "BankAccountCreated";
    }
    public getPayload(): { [key: string]: any; } {
        return this.payload;
    }
    public constructor(accountId:Id){
        super();
        this.payload.id=accountId.toNumber();
    }

}