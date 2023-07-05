import type { UpdateEventModel } from "../update/UpdateEventModel.ts";
import type { UpdateBirthdayEvent } from "./UpdateBirthdayEvent.ts";

export type UpdateBirthdayEventFactory = {
    readonly build: (
        appointEvent: UpdateBirthdayEvent,
    ) => UpdateEventModel;
};
