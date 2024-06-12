import type { Result } from "../../../../lang/result.ts";
import type { Event } from "../../model.ts";
import type { BirthdayCreateErrors, BirthdayCreateService } from "./service.ts";
import { ok } from "../../../../lang/result.ts";

export class BirthdayCreateServiceStub implements BirthdayCreateService {
    constructor(private readonly event: Event) {}

    public create(): Promise<Result<Event, BirthdayCreateErrors>> {
        return Promise.resolve(ok(this.event));
    }
}
