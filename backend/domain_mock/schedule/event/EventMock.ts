import type { Event } from "@ps/domain/schedule/event/Event.ts";

export const eventMock: Event = {
    id: "id",
    name: "name",
    day: "2023-06-24",
    begin: "08:00",
    end: "18:00",
    category: "APPOINTMENT",
    frequency: "NEVER",
    weekendRepeat: false,
    user: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
};
