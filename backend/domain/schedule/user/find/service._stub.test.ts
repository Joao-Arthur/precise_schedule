import { assertEquals } from "std/testing/asserts.ts";
import { userStub } from "../model._stub.ts";
import { userFindModelStub } from "./model._stub.ts";
import { UserFindServiceStub } from "./service._stub.ts";

Deno.test("UserFindServiceStub", async () => {
    assertEquals(
        await new UserFindServiceStub(userStub, userFindModelStub).findById(),
        userStub,
    );
    assertEquals(
        await new UserFindServiceStub(userStub, userFindModelStub).findByCredentials(),
        userStub,
    );
});
