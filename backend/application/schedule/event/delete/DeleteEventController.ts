import type { User } from "@ps/domain/schedule/user/User.ts";
import type { HTTPRequest } from "@ps/application/http/HTTPRequest.ts";
import type { HTTPResponse } from "@ps/application/http/HTTPResponse.ts";
import type { IdParam } from "@ps/application/http/IdParam.ts";

export type DeleteEventController = {
    readonly handle: (
        userId: User["id"],
        req: HTTPRequest<undefined, IdParam>,
    ) => Promise<HTTPResponse>;
};
