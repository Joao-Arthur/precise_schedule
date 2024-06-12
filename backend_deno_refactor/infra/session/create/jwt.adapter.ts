import type { Result } from "../../../domain/lang/result.ts";
import type { User } from "../../../domain/schedule/user/model.ts";
import type { Session } from "../../../domain/session/model.ts";
import type {
    SessionCreateErrors,
    SessionCreateService,
} from "../../../domain/session/create/service.ts";
import type { SessionPayload } from "../SessionPayload.ts";
import { create, getNumericDate } from "djwt/mod.ts";
import { SessionCreateError } from "../../../domain/session/create/error.ts";
import { buildErr, buildOk } from "../../../domain/lang/result.ts";
import { key } from "../key.ts";

export class SessionCreateServiceJWTAdapter implements SessionCreateService {
    private static EXP_SEC = 60 * 60 * 2;

    public async create(userId: User["id"]): Promise<Result<Session, SessionCreateErrors>> {
        const payload: SessionPayload = {
            exp: getNumericDate(
                SessionCreateServiceJWTAdapter.EXP_SEC,
            ),
            userId,
        };
        try {
            const token = await create(
                { alg: "HS512", typ: "JWT" },
                payload,
                key,
            );
            return buildOk({ token });
        } catch {
            return buildErr(new SessionCreateError());
        }
    }
}
