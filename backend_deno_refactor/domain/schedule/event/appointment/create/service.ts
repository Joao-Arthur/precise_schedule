import type { Result } from "../../../../lang/result.ts";
import type { RepositoryError } from "../../../../repository/RepositoryError.ts";
import type { ValidationError } from "../../../../validation/ValidationError.ts";
import type { User } from "../../../user/model.ts";
import type { Event } from "../../model.ts";
import type { AppointmentCreateModel } from "./model.ts";

export type AppointmentCreateErrors =
    | RepositoryError
    | ValidationError;

export type AppointmentCreateService = {
    readonly create: (
        userId: User["id"],
        event: AppointmentCreateModel,
    ) => Promise<Result<Event, AppointmentCreateErrors>>;
};
