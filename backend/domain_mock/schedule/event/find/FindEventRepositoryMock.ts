import type { Event } from "@ps/domain/schedule/event/Event.ts";
import type { FindEventRepository } from "@ps/domain/schedule/event/find/FindEventRepository.ts";

export class FindEventRepositoryMock implements FindEventRepository {
    constructor(private readonly event: Event | undefined) {}

    public findByUser(): Promise<Event[]> {
        return Promise.resolve(this.event ? [this.event] : []);
    }

    public findByUserAndId(): Promise<Event | undefined> {
        return Promise.resolve(this.event);
    }
}
