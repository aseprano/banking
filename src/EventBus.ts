import { Event } from "./Event";
import { EventConsumer } from "./EventConsumer";

export interface EventBus{

    dispach(event: Event): void;
    
    subscribeTo(eventName: string, eventConsumer: EventConsumer): void;
}