import { assertEquals } from "std/testing/asserts.ts";
import { userStub } from "../model._stub.ts";
import { userUpdateModelStub } from "./model._stub.ts";
import { UserUpdateFactoryImpl } from "./factory.impl.ts";

Deno.test("UserUpdateFactoryImpl", () => {
    assertEquals(
        new UserUpdateFactoryImpl().build(userUpdateModelStub, userStub),
        {
            id: "id",
            createdAt: userStub.createdAt,
            updatedAt: new Date(),
            ...userUpdateModelStub,
        },
    );
});
