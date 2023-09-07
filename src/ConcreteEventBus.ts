import { Event } from "./Event";
import { EventBus } from "./EventBus"
import { EventConsumer } from "./EventConsumer";

export class ConcreteEventClass implements EventBus{

    private subscribers = new Map<string, Array<EventConsumer>>();

    dispach(event: Event): void {
        const subscribers = this.subscribers.get(event.getName());
        if(subscribers==undefined){
            return
        }
        for(const subscriber of subscribers){
            subscriber.onEvent(event)
        }
    }

    subscribeTo(eventName: string, eventConsumer: EventConsumer): void {
        if(this.subscribers.has(eventName)){
            this.subscribers.get(eventName)?.push(eventConsumer);
        }
        else{
            this.subscribers.set(eventName, [eventConsumer]);
        }
    }

}