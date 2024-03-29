import type { Event } from "../model.ts";
import type { EventFindFactory } from "./factory.ts";
import type { EventFindModel } from "./model.ts";

export class EventFindFactoryImpl implements EventFindFactory {
    public build(event: Event): EventFindModel {
        return {
            id: event.id,
            name: event.name,
            day: event.day,
            begin: event.begin,
            end: event.end,
            category: event.category,
            frequency: event.frequency,
            weekendRepeat: event.weekendRepeat,
        };
    }
}
