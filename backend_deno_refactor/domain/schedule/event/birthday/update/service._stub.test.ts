import { assertEquals } from "@std/assert/assert-equals";
import { eventStub } from "../../model._stub.ts";
import { BirthdayUpdateServiceStub } from "./service._stub.ts";
import { ok } from "../../../../lang/result.ts";

Deno.test("BirthdayUpdateServiceStub", async () => {
    assertEquals(
        await new BirthdayUpdateServiceStub(eventStub).update(),
        ok(eventStub),
    );
});
