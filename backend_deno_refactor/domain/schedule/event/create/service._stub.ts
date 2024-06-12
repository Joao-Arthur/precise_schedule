import type { Result } from "../../../lang/result.ts";
import type { Event } from "../model.ts";
import type { EventCreateErrors, EventCreateService } from "./service.ts";
import { buildOk } from "../../../lang/result.ts";

export class EventCreateServiceStub implements EventCreateService {
    constructor(private readonly event: Event) {}

    public create(): Promise<Result<Event, EventCreateErrors>> {
        return Promise.resolve(buildOk(this.event));
    }
}
