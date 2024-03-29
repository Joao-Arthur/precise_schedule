import type { User } from "../../user/model.ts";
import type { Event } from "../model.ts";
import type { EventCreateModel } from "./model.ts";
import type { EventCreateService } from "./service.ts";
import type { EventCreateFactory } from "./factory.ts";
import type { EventCreateRepository } from "./repository.ts";

export class EventCreateServiceImpl implements EventCreateService {
    constructor(
        private readonly repository: EventCreateRepository,
        private readonly factory: EventCreateFactory,
    ) {}

    public async create(userId: User["id"], event: EventCreateModel): Promise<Event> {
        const buildedEvent = this.factory.build(userId, event);
        await this.repository.create(buildedEvent);
        return buildedEvent;
    }
}
