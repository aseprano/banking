import { addAbortSignal } from "stream";

export class AnalysisTools {
    AnalysisTools(){};
    AccountMap = new Map <number, number>();

    Withdraw(amount : number, id: number){
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

    Deposit(amount : number, id : number) : void{
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
            let plcHldr0 : number
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

    GetMap() : Map<number, number> {
        return this.AccountMap;
    }

    PrintMap(range : number){
        let oldMap = this.AccountMap;
        let print : boolean = false;
        this.OrderList();
        let firstOldKey = oldMap.keys();
        let firstNewKey = this.AccountMap.keys();

        for(let i = 0; i < range; i++){
            if(firstNewKey===firstOldKey){
                firstNewKey.next
                firstOldKey.next
            }
            else{
                print = true
                break
            }
        }
        if(print){
            let arr = Array.from(this.AccountMap)
            for(let i = 0; i < range; i++){
                console.log(arr[i] + "\n")
            }
        }
    }

    CreateAccount(id : number, amount : number) : void{
        this.AccountMap.set(id, amount);
    }
}