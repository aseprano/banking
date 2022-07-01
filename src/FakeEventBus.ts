import { Event } from "./Event";
import { EventBus } from "./EventBus";
import { EventConsumer } from "./EventConsumer";

export class FakeEventBus implements EventBus{
    dispatch(event: Event): void {
        
    }
    subscribeTo(name: string, consumer: EventConsumer): void {
        
    }
} 