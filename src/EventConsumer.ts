import { Event } from "./Event";

export abstract class EventConsumer{
    public abstract onEvent(event: Event): void
}