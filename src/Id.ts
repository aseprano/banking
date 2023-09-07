export class Id{
    public constructor(private id:number){
        if(id<0){
            throw new Error("account ID cannot be negative");
        }

    }

    public toNumber():number{
        return this.id;
    }
}