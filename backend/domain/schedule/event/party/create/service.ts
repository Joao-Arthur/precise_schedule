import type { User } from "../../../user/model.ts";
import type { Event } from "../../model.ts";
import type { PartyCreateModel } from "./model.ts";

export type PartyCreateService = {
    readonly create: (userId: User["id"], event: PartyCreateModel) => Promise<Event>;
};
