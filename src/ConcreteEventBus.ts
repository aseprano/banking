import { Event } from "./Event";
import { EventBus } from "./EventBus";
import { EventConsumer } from "./EventConsumer";

export class ConcreteEventBus implements EventBus{

    subscribers : { [key: string]: Array<EventConsumer>; } = {};

    dispatch(event: Event): void {
        var eventSubscribers = [];
        eventSubscribers = this.subscribers[event.name];

        if(eventSubscribers !== undefined){
            for(let i = 0; i < eventSubscribers.length; i++){
                try{
                    eventSubscribers[i].onEvent(event);
                }
                catch(Exception){
                    console.log("Exception thrown");
                }
            }
        }
    }

    subscribeTo(name: string, consumer: EventConsumer): void {
        if(this.subscribers[name] === undefined){
            this.subscribers[name] = [consumer];
        }
        else{
            this.subscribers[name].push(consumer);
        }
    }
}