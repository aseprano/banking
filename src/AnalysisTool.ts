import { Event } from "./Event";

export class AnalysisTool
{
    private balances=new Map<number,number>();
    private attributeId(event: Event):number
    {
        const id=event.getPayload().id??0;
        return id;
    }
    private accountCharged(event: Event):number
    {
        const currentBalance=this.balances.get(this.attributeId(event))??0;
        const newBalance=currentBalance+event.getPayload().amount;
        return newBalance;
    }
    private accountDebited(event: Event):number
    {
        const currentBalance=this.balances.get(this.attributeId(event))??0;
        const newBalance=currentBalance-event.getPayload().amount;
        return newBalance;
    }
    public onEvent(event: Event):void
    {        
        switch(event.getName())
        {
            case "BankAccountCreated":
                this.balances.set(this.attributeId(event),0);
                break;
            case "BankAccountCharged":
                this.balances.set(this.attributeId(event),this.accountCharged(event));
                break;
            case "BankAccountDebited":
                this.balances.set(this.attributeId(event), this.accountDebited(event));
                break;
        }
    }
    public printList(): void
    {
        const entries=Array.from(this.balances.entries());
        for(let i=0; i<entries.length-1; i++)
        {
            for(let j=i+1; j<entries.length;j++)
            {
                if(entries[i][1]<entries[j][1])
                {
                    let temp;
                    temp=entries[i];
                    entries[i]=entries[j];
                    entries[j]=temp;
                }
             }
        }
        const maxEntries = entries.length < 10 ? entries.length : 10;
        for(let i=0; i<maxEntries; i++)
        {
            console.log(entries[i]);
        }
    }
}