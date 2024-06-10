import type { Result } from "../../../lang/result.ts";
import type { User } from "../model.ts";
import type { UserUpdateService } from "./service.ts";
import { buildOk } from "../../../lang/result.ts";

export class UserUpdateServiceStub implements UserUpdateService {
    constructor(private readonly user: User) {}

    public update(): Promise<Result<User>> {
        return Promise.resolve(buildOk(this.user));
    }
}