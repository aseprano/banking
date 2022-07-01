import {Event} from "./Event";
import { EventConsumer } from "./EventConsumer";

export interface EventBus{
    dispatch(event : Event) : void;
    subscribeTo(name : string, consumer : EventConsumer) : void;
}