abstract class AbstractEvent{

    private date : string = new Date().toISOString();

    constructor(private name : string){}

    getName() : string{
        return this.name;
    }

    getDate() : string{
        return this.date;
    }

    abstract getPayload() : {[key : string ] : any};
}