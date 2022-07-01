import { AnalysisTools } from "./AnalysisTools";
import { Event } from "./Event";
import { EventConsumer } from "./EventConsumer";

export class AnalysisToolsEventConsumer implements EventConsumer{



    constructor(private analysisTools : AnalysisTools){

    }

    onEvent(event: Event): void {
            switch (event.name){
                case "charge":
                        this.analysisTools.Deposit(event.payload[0], event.payload[1])
                        this.analysisTools.PrintMap();
                        break;
                case "create":
                        this.analysisTools.CreateAccount(event.payload[0], 0)
                        break; 
                case "withdraw": 
                        this.analysisTools.Withdraw(event.payload[0], event.payload[1])
                        this.analysisTools.PrintMap()
                        break;
            }
    }

}