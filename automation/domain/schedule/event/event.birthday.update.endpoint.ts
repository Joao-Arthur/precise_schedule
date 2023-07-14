import type { Res } from "../../../infra/res.ts";
import type { BusinessError } from "../../general/business.error.ts";
import type { UpdateBirthdayEvent } from "./event.birthday.update.model.ts";

import { request } from "../../../infra/request.ts";

export function updateBirthdayEvent(
    id: string,
    model: UpdateBirthdayEvent,
): Promise<Res<void | BusinessError>> {
    return request.put(`event/BIRTHDAY/${id}`, model);
}
