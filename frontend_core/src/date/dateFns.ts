import { formatDate } from "./formatDate/formatDate.js";
import { formatDay } from "./formatDay/formatDay.js";
import { current } from "./current/current.js";
import { currentYear } from "./currentYear/currentYear.js";
import { currentMonth } from "./currentMonth/currentMonth.js";
import { formatMonth } from "./formatMonth/formatMonth.js";
import { formatMonths } from "./formatMonths/formatMonths.js";
import { formatWeekDays } from "./formatWeekDays/formatWeekDays.js";

export const dateFns = {
    formatDate,
    formatDay,
    current,
    currentYear,
    currentMonth,
    formatMonth,
    formatMonths,
    formatWeekDays,
} as const;
