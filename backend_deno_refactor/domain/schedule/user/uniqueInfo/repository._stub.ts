import type { Result } from "../../../lang/result.ts";
import type { RepositoryError } from "../../../repository/RepositoryError.ts";
import type { UserRepo } from "./repo.ts";
import { ok } from "../../../lang/result.ts";

export class UserUniqueInfoRepositoryStub implements UserRepo {
    constructor(
        private readonly numUsername: number,
        private readonly numEmail: number,
    ) {}

    public countUsername(): Promise<Result<number, RepositoryError>> {
        return Promise.resolve(ok(this.numUsername));
    }

    public countEmail(): Promise<Result<number, RepositoryError>> {
        return Promise.resolve(ok(this.numEmail));
    }
}
