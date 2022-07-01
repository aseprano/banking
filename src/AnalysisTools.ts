import { addAbortSignal } from "stream";

export class AnalysisTools {
    AnalysisTools(){};
    AccountMap = new Map <string, number>();

    Withdraw(amount : number, id: string) : void{
        const currentBalance = this.AccountMap.get(id);
        if(currentBalance === undefined){
            this.CreateAccount(id, 0)
        }
        else{
            if(currentBalance >= amount){
                this.AccountMap.set(id, currentBalance - amount) 
            } 
        }
    }

    Deposit(amount : number, id : string) : void{
        const currentBalance = this.AccountMap.get(id);
        if(currentBalance === undefined){
            this.CreateAccount(id, amount)
        }
        else{
           this.AccountMap.set(id, currentBalance + amount) 
        }
    }

    OrderList() : void{
            let cont : boolean = true;
            let arr = Array.from(this.AccountMap)
            let plcHldr0 : string
            let plcHldr1 : number

            while(cont === true){
                cont = false;
                for(let i : number = 0; i < this.AccountMap.size - 1; i++){
                    if(arr[i][1] < arr[i+1][1]){
                        plcHldr0 = arr[i][0]
                        plcHldr1 = arr[i][1]

                        arr[i][0] = arr[i+1][0]
                        arr[i][1] = arr[i+1][1]

                        arr[i+1][0] = plcHldr0
                        arr[i+1][1] = plcHldr1

                        cont = true;
                    }
                }
            }
            this.AccountMap = new Map(arr)
    }

    GetMap() : Map<string, number> {
        return this.AccountMap;
    }

    PrintMap() : void {
        let oldMap = Array.from(this.AccountMap);
        let print : boolean = false;
        this.OrderList();
        let newMap = Array.from(this.AccountMap)

        for(let i = 0; i < this.AccountMap.size; i++){
            if(oldMap[i][0]===newMap[i][0]){
                continue
            }
            else{
                print = true
                break
            }
        }
        
        if(print === true){
            let arr = Array.from(this.AccountMap)
            for(let i = 0; i < this.AccountMap.size; i++){
                console.log(arr[i] + "\n")
            }
        }
    }

    CreateAccount(id : string, amount : number) : void{
        this.AccountMap.set(id, amount);
    }
}