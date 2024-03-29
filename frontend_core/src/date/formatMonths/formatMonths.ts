import type { Months } from "../months.js";
import { Temporal } from "@js-temporal/polyfill";

export function formatMonths(locale: string, format: "long" | "short" | "narrow"): Months {
    function fmt(date: Temporal.PlainDate): string {
        return date.toLocaleString(locale, { month: format })
            .toLocaleLowerCase()
            .replace(".", "");
    }

    return [
        fmt(Temporal.PlainDate.from("2000-01-01")),
        fmt(Temporal.PlainDate.from("2000-02-01")),
        fmt(Temporal.PlainDate.from("2000-03-01")),
        fmt(Temporal.PlainDate.from("2000-04-01")),
        fmt(Temporal.PlainDate.from("2000-05-01")),
        fmt(Temporal.PlainDate.from("2000-06-01")),
        fmt(Temporal.PlainDate.from("2000-07-01")),
        fmt(Temporal.PlainDate.from("2000-08-01")),
        fmt(Temporal.PlainDate.from("2000-09-01")),
        fmt(Temporal.PlainDate.from("2000-10-01")),
        fmt(Temporal.PlainDate.from("2000-11-01")),
        fmt(Temporal.PlainDate.from("2000-12-01")),
    ];
}
