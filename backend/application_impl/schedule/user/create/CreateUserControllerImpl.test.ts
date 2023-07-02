import { assertEquals } from "std/testing/asserts.ts";
import { CreateUserControllerImpl } from "./CreateUserControllerImpl.ts";
import { CreateUserServiceMock } from "@ps/domain_mock/schedule/user/create/CreateUserServiceMock.ts";
import { userMock } from "@ps/domain_mock/schedule/user/UserMock.ts";
import { httpRequestBodyMock } from "@ps/application_mock/http/httpRequestMock.ts";
import { ok } from "@ps/application/http/builder/ok.ts";

Deno.test("CreateUserControllerImpl", async () => {
    assertEquals(
        await new CreateUserControllerImpl(
            new CreateUserServiceMock(userMock),
        ).handle(httpRequestBodyMock),
        ok(userMock),
    );
});
