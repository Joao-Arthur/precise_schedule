import type { Event } from "@ps/domain/schedule/event/Event.ts";
import type { CreateAppointmentEvent } from "@ps/domain/schedule/event/createAppointment/CreateAppointmentEvent.ts";

export type CreateAppointmentEventService = {
    readonly create: (
        event: CreateAppointmentEvent,
    ) => Promise<Event>;
};
