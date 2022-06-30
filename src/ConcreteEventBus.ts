import { Event } from "./Event";
import { EventBus } from "./EventBus";
import { EventConsumer } from "./EventConsumer";

export class ConcreteEventBus implements EventBus{

    subscribers : { [key: string]: Array<EventConsumer>; } = {};

    dispatch(event: Event): void {
        var i : number;
        var eventSubscribers = [];
        eventSubscribers = this.subscribers[event.name];
        for(i = 0; i < eventSubscribers.length; i++){
            eventSubscribers[i].onEvent(event);
        }
    }

    subscribeTo(name: string, consumer: EventConsumer): void {
        if(this.subscribers[name] === undefined){
            this.create(name, consumer)
        }
        else{
            this.subscribers[name].push(consumer);
        }
    }

    create(name : string, consumer : EventConsumer){
        this.subscribers[name] = [consumer]
    }

}