import type { CreatePartyEvent } from "@ps/domain/schedule/event/createParty/CreatePartyEvent.ts";
import type { CreatePartyEventService } from "@ps/domain/schedule/event/createParty/CreatePartyEventService.ts";
import type { HTTPRequest } from "@ps/application/http/HTTPRequest.ts";
import type { HTTPResponse } from "@ps/application/http/HTTPResponse.ts";
import type { CreatePartyEventController } from "@ps/application/schedule/event/createParty/CreatePartyEventController.ts";

import { ValidationError } from "@ps/domain/validation/ValidationError.ts";
import { created } from "@ps/application/http/builder/created.ts";
import { badRequest } from "@ps/application/http/builder/badRequest.ts";
import { internalServerError } from "@ps/application/http/builder/internalServerError.ts";

export class CreatePartyEventControllerImpl
    implements CreatePartyEventController {
    constructor(
        private readonly service: CreatePartyEventService,
    ) {}

    public async handle(
        request: HTTPRequest<CreatePartyEvent, undefined>,
    ): Promise<HTTPResponse> {
        try {
            await this.service.create(request.body);
            return created();
        } catch (e: unknown) {
            if (e instanceof ValidationError) {
                return badRequest(e.result);
            }
            return internalServerError();
        }
    }
}
