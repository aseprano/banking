export class AnalysisTool
{
    private balances=new Map<number,number>();
    public onEvent(event: any):void
    {
        if(!this.balances.has())
        {
            this.balances.get();
        }
        else
        {
            
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
        for(let i=0; i<entries.length; i++)
        {
            console.log(entries[i])
        }
    }
}