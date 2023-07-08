import { assertEquals } from "std/testing/asserts.ts";
import { eventMock } from "@ps/domain_mock/schedule/event/EventMock.ts";
import { UpdateEventServiceMock } from "@ps/domain_mock/schedule/event/update/UpdateEventServiceMock.ts";
import { updatePartyEventMock } from "@ps/domain_mock/schedule/event/updateParty/UpdatePartyEventMock.ts";
import { UpdatePartyEventFactoryMock } from "@ps/domain_mock/schedule/event/updateParty/UpdatePartyEventFactoryMock.ts";
import { UpdatePartyEventServiceImpl } from "./UpdatePartyEventServiceImpl.ts";

Deno.test("UpdatePartyEventServiceImpl", async () => {
    assertEquals(
        await new UpdatePartyEventServiceImpl(
            new UpdatePartyEventFactoryMock(eventMock),
            new UpdateEventServiceMock(eventMock),
        ).update(eventMock.id, updatePartyEventMock),
        eventMock,
    );
});