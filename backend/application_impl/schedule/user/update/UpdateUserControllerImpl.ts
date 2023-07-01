import type { ValidationResult } from "@ps/domain/validation/ValidationResult.ts";
import type { User } from "@ps/domain/schedule/user/User.ts";
import type { UpdateUserModel } from "@ps/domain/schedule/user/update/UpdateUserModel.ts";
import type { UpdateUserService } from "@ps/domain/schedule/user/update/UpdateUserService.ts";
import type { UpdateUserController } from "@ps/application/schedule/user/update/UpdateUserController.ts";
import type { ErrorResponse } from "@ps/application/http/ErrorResponse.ts";
import type { HTTPRequest } from "@ps/application/http/HTTPRequest.ts";
import type { HTTPResponse } from "@ps/application/http/HTTPResponse.ts";
import type { IdParam } from "@ps/application/http/IdParam.ts";

import { ValidationError } from "@ps/domain/validation/ValidationError.ts";
import { ok } from "@ps/application/http/builder/ok.ts";
import { badRequest } from "@ps/application/http/builder/badRequest.ts";
import { internalServerError } from "@ps/application/http/builder/internalServerError.ts";

export class UpdateUserControllerImpl
    implements UpdateUserController {
    constructor(private readonly service: UpdateUserService) {}

    public handle(
        request: HTTPRequest<UpdateUserModel, IdParam<User["id"]>>,
    ): HTTPResponse<User | ValidationResult | ErrorResponse | Error> {
        try {
            const result = this.service.update(
                request.params.id,
                request.body,
            );
            return ok(result);
        } catch (e: unknown) {
            if (e instanceof ValidationError) {
                return badRequest(e.result);
            }
            return internalServerError();
        }
    }
}
