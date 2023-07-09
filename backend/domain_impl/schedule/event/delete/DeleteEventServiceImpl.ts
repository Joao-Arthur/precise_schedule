import type { Event } from "@ps/domain/schedule/event/Event.ts";
import type { FindEventService } from "@ps/domain/schedule/event/find/FindEventService.ts";
import type { DeleteEventRepository } from "@ps/domain/schedule/event/delete/DeleteEventRepository.ts";
import type { DeleteEventService } from "@ps/domain/schedule/event/delete/DeleteEventService.ts";

export class DeleteEventServiceImpl implements DeleteEventService {
    constructor(
        private readonly repository: DeleteEventRepository,
        private readonly findEventService: FindEventService,
    ) {}

    public async del(id: Event["id"]): Promise<Event> {
        const existingEvent = await this.findEventService.findById(id);
        await this.repository.del(id);
        return existingEvent;
    }
}
