import { assertEquals } from "@std/assert/assert-equals";
import { eventStub } from "../model._stub.ts";
import { EventFindRepositoryStub } from "./repository._stub.ts";
import { ok } from "../../../lang/result.ts";

Deno.test("EventFindRepositoryStub", async () => {
    assertEquals(
        await new EventFindRepositoryStub(undefined).findByUserAndId(),
        ok(undefined),
    );
    assertEquals(
        await new EventFindRepositoryStub(eventStub).findByUserAndId(),
        ok(eventStub),
    );
});
