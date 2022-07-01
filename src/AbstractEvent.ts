export abstract class AbstractEvent{

    public date : string = new Date().toISOString();

    constructor(public name : string){}

    getName() : string{
        return this.name;
    }

    getDate() : string{
        return this.date;
    }

    abstract getPayload() : {[key : string ] : any};
}