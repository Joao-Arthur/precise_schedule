import type { User } from "@ps/domain/schedule/user/model.ts";
import type { Event } from "@ps/domain/schedule/event/model.ts";
import type { EventRepository } from "@ps/domain/schedule/event/repository.ts";

export class EventRepositoryMemory implements EventRepository {
    private readonly events: Event[] = [];

    public create(event: Event): Promise<void> {
        this.events.push(event);
        return Promise.resolve();
    }

    public update(userToUpdate: Event): Promise<void> {
        this.events.splice(
            this.events.findIndex((event) => event.id === userToUpdate.id),
            1,
            userToUpdate,
        );
        return Promise.resolve();
    }

    public findByUser(userId: User["id"]): Promise<Event[]> {
        return Promise.resolve(this.events.filter((event) => event.user === userId));
    }

    public findByUserAndId(
        userId: User["id"],
        id: Event["id"],
    ): Promise<Event | undefined> {
        return Promise.resolve(
            this.events.find((event) => event.id === id && event.user === userId),
        );
    }

    public del(id: Event["id"]): Promise<void> {
        this.events.splice(this.events.findIndex((event) => event.id === id), 1);
        return Promise.resolve();
    }
}
