import { assert, it } from "vitest";
import { repLazy } from "./repLazy.js";

it("repLazy 1D", () => {
    const itt = repLazy({ d: "2000-01-01", freq: "1D" });

    assert.strictEqual(itt.next().value, "2000-01-02");
    assert.strictEqual(itt.next().value, "2000-01-03");
    assert.strictEqual(itt.next().value, "2000-01-04");
    assert.strictEqual(itt.next().value, "2000-01-05");
    assert.strictEqual(itt.next().value, "2000-01-06");
});

it("repLazy 1D", () => {
    const itt = repLazy({ d: "2020-02-27", freq: "1D" });

    assert.strictEqual(itt.next().value, "2020-02-28");
    assert.strictEqual(itt.next().value, "2020-02-29");
    assert.strictEqual(itt.next().value, "2020-03-01");
    assert.strictEqual(itt.next().value, "2020-03-02");
});

it("repLazy 1D", () => {
    const itt = repLazy({ d: "2021-02-27", freq: "1D" });

    assert.strictEqual(itt.next().value, "2021-02-28");
    assert.strictEqual(itt.next().value, "2021-03-01");
    assert.strictEqual(itt.next().value, "2021-03-02");
});

it("repLazy 2D", () => {
    const itt = repLazy({ d: "2000-01-01", freq: "2D" });

    assert.strictEqual(itt.next().value, "2000-01-03");
    assert.strictEqual(itt.next().value, "2000-01-05");
    assert.strictEqual(itt.next().value, "2000-01-07");
    assert.strictEqual(itt.next().value, "2000-01-09");
    assert.strictEqual(itt.next().value, "2000-01-11");
});

it("repLazy 2D", () => {
    const itt = repLazy({ d: "2020-02-27", freq: "2D" });

    assert.strictEqual(itt.next().value, "2020-02-29");
    assert.strictEqual(itt.next().value, "2020-03-02");
});

it("repLazy 2D", () => {
    const itt = repLazy({ d: "2021-02-27", freq: "2D" });

    assert.strictEqual(itt.next().value, "2021-03-01");
});

it("repLazy 1W", () => {
    const itt = repLazy({ d: "2000-01-01", freq: "1W" });

    assert.strictEqual(itt.next().value, "2000-01-08");
    assert.strictEqual(itt.next().value, "2000-01-15");
    assert.strictEqual(itt.next().value, "2000-01-22");
    assert.strictEqual(itt.next().value, "2000-01-29");
    assert.strictEqual(itt.next().value, "2000-02-05");
});

it("repLazy 1W", () => {
    const itt = repLazy({ d: "2020-02-21", freq: "1W" });

    assert.strictEqual(itt.next().value, "2020-02-28");
    assert.strictEqual(itt.next().value, "2020-03-06");
});

it("repLazy 1W", () => {
    const itt = repLazy({ d: "2021-02-21", freq: "1W" });

    assert.strictEqual(itt.next().value, "2021-02-28");
    assert.strictEqual(itt.next().value, "2021-03-07");
});

it("repLazy 1M", () => {
    const itt = repLazy({ d: "2000-01-01", freq: "1M" });

    assert.strictEqual(itt.next().value, "2000-02-01");
    assert.strictEqual(itt.next().value, "2000-03-01");
    assert.strictEqual(itt.next().value, "2000-04-01");
    assert.strictEqual(itt.next().value, "2000-05-01");
    assert.strictEqual(itt.next().value, "2000-06-01");
});

it("repLazy 1M", () => {
    const itt = repLazy({ d: "2020-01-31", freq: "1M" });

    assert.strictEqual(itt.next().value, "2020-02-29");
    assert.strictEqual(itt.next().value, "2020-03-31");
});

it("repLazy 1M", () => {
    const itt = repLazy({ d: "2021-01-31", freq: "1M" });

    assert.strictEqual(itt.next().value, "2021-02-28");
    assert.strictEqual(itt.next().value, "2021-03-31");
});

it("repLazy 3M", () => {
    const itt = repLazy({ d: "2000-01-01", freq: "3M" });

    assert.strictEqual(itt.next().value, "2000-04-01");
    assert.strictEqual(itt.next().value, "2000-07-01");
    assert.strictEqual(itt.next().value, "2000-10-01");
    assert.strictEqual(itt.next().value, "2001-01-01");
    assert.strictEqual(itt.next().value, "2001-04-01");
});

it("repLazy 3M", () => {
    const itt = repLazy({ d: "2019-11-30", freq: "3M" });

    assert.strictEqual(itt.next().value, "2020-02-29");
    assert.strictEqual(itt.next().value, "2020-05-30");
    assert.strictEqual(itt.next().value, "2020-08-30");
    assert.strictEqual(itt.next().value, "2020-11-30");
});

it("repLazy 6M", () => {
    const itt = repLazy({ d: "2000-01-01", freq: "6M" });

    assert.strictEqual(itt.next().value, "2000-07-01");
    assert.strictEqual(itt.next().value, "2001-01-01");
    assert.strictEqual(itt.next().value, "2001-07-01");
    assert.strictEqual(itt.next().value, "2002-01-01");
    assert.strictEqual(itt.next().value, "2002-07-01");
});

it("repLazy 6M", () => {
    const itt = repLazy({ d: "2019-08-31", freq: "6M" });

    assert.strictEqual(itt.next().value, "2020-02-29");
    assert.strictEqual(itt.next().value, "2020-08-31");
    assert.strictEqual(itt.next().value, "2021-02-28");
    assert.strictEqual(itt.next().value, "2021-08-31");
});

it("repLazy 1Y", () => {
    const itt = repLazy({ d: "2000-01-01", freq: "1Y" });

    assert.strictEqual(itt.next().value, "2001-01-01");
    assert.strictEqual(itt.next().value, "2002-01-01");
    assert.strictEqual(itt.next().value, "2003-01-01");
    assert.strictEqual(itt.next().value, "2004-01-01");
    assert.strictEqual(itt.next().value, "2005-01-01");
});

it("repLazy 1Y", () => {
    const itt = repLazy({ d: "2020-02-29", freq: "1Y" });

    assert.strictEqual(itt.next().value, "2021-02-28");
    assert.strictEqual(itt.next().value, "2022-02-28");
    assert.strictEqual(itt.next().value, "2023-02-28");
    assert.strictEqual(itt.next().value, "2024-02-29");
});

it("repLazy 2Y", () => {
    const itt = repLazy({ d: "2000-01-01", freq: "2Y" });

    assert.strictEqual(itt.next().value, "2002-01-01");
    assert.strictEqual(itt.next().value, "2004-01-01");
    assert.strictEqual(itt.next().value, "2006-01-01");
    assert.strictEqual(itt.next().value, "2008-01-01");
    assert.strictEqual(itt.next().value, "2010-01-01");
});

it("repLazy 2Y", () => {
    const itt = repLazy({ d: "2020-02-29", freq: "2Y" });

    assert.strictEqual(itt.next().value, "2022-02-28");
    assert.strictEqual(itt.next().value, "2024-02-29");
});

it("repLazy undefined", () => {
    const itt = repLazy({ d: "2000-01-01", freq: undefined });

    assert.strictEqual(itt.next().value, undefined);
    assert.strictEqual(itt.next().value, undefined);
    assert.strictEqual(itt.next().value, undefined);
    assert.strictEqual(itt.next().value, undefined);
    assert.strictEqual(itt.next().value, undefined);
});
