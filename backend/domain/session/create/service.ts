import type { User } from "../../schedule/user/model.ts";
import type { Session } from "../model.ts";

export type SessionCreateService = {
    readonly create: (userId: User["id"]) => Promise<Session>;
};
