import { assertEquals } from "std/assert/assert_equals.ts";
import { partyCreateModelStub } from "./model._stub.ts";
import { PartyCreateFactoryImpl } from "./factory.impl.ts";

Deno.test("PartyCreateFactoryImpl", () => {
    assertEquals(
        new PartyCreateFactoryImpl().build(partyCreateModelStub),
        {
            category: "PARTY",
            frequency: undefined,
            weekendRepeat: false,
            ...partyCreateModelStub,
        },
    );
});
