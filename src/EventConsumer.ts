import {Event} from "./Event"

export interface EventConsumer{
    onEvent(event : Event) : void;
}