export abstract class Event{
    
    private firedAt: string
    
    protected payload:{
        [key: string]: any;
    }={};

    public constructor(){
        this.firedAt=new Date().toISOString(); 
    }

    public abstract getName(): string

    public getDate(d: string): string{
        return this.firedAt;
    }
    
    public abstract getPayload(): {
        [key: string] :any
    }
}