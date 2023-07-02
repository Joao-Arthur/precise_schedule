import type { User } from "../User.ts";
import type { UniqueInfoModel } from "./UniqueInfoModel.ts";

export type UniqueInfoService = {
    readonly validateNew: (user: UniqueInfoModel) => Promise<void>;
    readonly validateExisting: (
        user: UniqueInfoModel,
        oldUser: User,
    ) => Promise<void>;
};
