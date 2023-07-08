import type { Event } from "@ps/domain/schedule/event/Event.ts";
import type { UpdateAppointmentEvent } from "@ps/domain/schedule/event/updateAppointment/UpdateAppointmentEvent.ts";
import type { UpdateAppointmentEventService } from "@ps/domain/schedule/event/updateAppointment/UpdateAppointmentEventService.ts";
import type { HTTPRequest } from "@ps/application/http/HTTPRequest.ts";
import type { HTTPResponse } from "@ps/application/http/HTTPResponse.ts";
import type { IdParam } from "@ps/application/http/IdParam.ts";
import type { UpdateAppointmentEventController } from "@ps/application/schedule/event/updateAppointment/UpdateAppointmentEventController.ts";

import { ValidationError } from "@ps/domain/validation/ValidationError.ts";
import { noContent } from "@ps/application/http/builder/noContent.ts";
import { badRequest } from "@ps/application/http/builder/badRequest.ts";
import { internalServerError } from "@ps/application/http/builder/internalServerError.ts";

export class UpdateAppointmentEventControllerImpl
    implements UpdateAppointmentEventController {
    constructor(
        private readonly updateAppointmentEventService:
            UpdateAppointmentEventService,
    ) {}

    public async handle(
        request: HTTPRequest<
            UpdateAppointmentEvent,
            IdParam<Event["id"]>
        >,
    ): Promise<HTTPResponse> {
        try {
            await this.updateAppointmentEventService.update(
                request.params.id,
                request.body,
            );
            return noContent();
        } catch (e: unknown) {
            if (e instanceof ValidationError) {
                return badRequest(e.result);
            }
            return internalServerError();
        }
    }
}