import { Event } from "./Event";
import { EventBus } from "./EventBus";
import { EventConsumer } from "./EventConsumer";

export class FakeEventBus implements EventBus{
    dispach(event: Event): void {
        
    }
    subscribeTo(eventName: string, eventConsumer: EventConsumer): void {
        
    }

}