import type { Result } from "../../../../lang/result.ts";
import type { ValidatorService } from "../../../../validation/validator/service.ts";
import type { User } from "../../../user/model.ts";
import type { Event } from "../../model.ts";
import type { EventCreateService } from "../../create/service.ts";
import type { BirthdayCreateModel } from "./model.ts";
import type { BirthdayCreateFactory } from "./factory.ts";
import type { BirthdayCreateErrors, BirthdayCreateService } from "./service.ts";
import { createBirthdayValidation } from "./validation.ts";

export class BirthdayCreateServiceImpl implements BirthdayCreateService {
    constructor(
        private readonly validator: ValidatorService,
        private readonly factory: BirthdayCreateFactory,
        private readonly service: EventCreateService,
    ) {}

    public create(
        userId: User["id"],
        event: BirthdayCreateModel,
    ): Promise<Result<Event, BirthdayCreateErrors>> {
        const validationResult = this.validator.validate(event, createBirthdayValidation);
        if (validationResult.type === "err") {
            return Promise.resolve(validationResult);
        }
        const builtEvent = this.factory.build(event);
        return this.service.create(userId, builtEvent);
    }
}
