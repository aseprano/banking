import { Event } from "./Event";

export class AnalysisTool
{
    private balances=new Map<number,number>();
    public onEvent(event: Event):void
    {
        switch(event.getName())
        {
            case "BankAccountCreated":
                const id=event.getPayload().id??0;
                this.balances.set(id,0);
                break;
            case "BankAccountCharged":
                const id=event.getPayload().id??0;
                const amount=event.getPayload().amount;
                const currentBalance=this.balances.get(id)??0;
                const newBalance=currentBalance-amount;
                this.balances.set(id,newBalance);
                break;
            case "BankAccountDebited":
                const id=event.getPayload().id??0;
                const amount=event.getPayload().amount;
                const currentBalance=this.balances.get(id)??0;
                const newBalance=currentBalance+amount;
                this.balances.set(id, newBalance);
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