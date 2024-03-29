import type { Calendar, Event } from "frontend_core";
import { calendarFns, dateFns } from "frontend_core";
import { cl } from "@/lib/cl";
import { useCalendar } from "@/features/calendar/useCalendar";
import { useEvent } from "@/features/event/useEvent";
import { Text } from "@/components/atoms/Text";

type props = {
    readonly calendar: Calendar;
    readonly date: string;
    readonly dateEvents: readonly Event["id"][];
};

export function Cell({ calendar, date, dateEvents }: props) {
    const { toggleSelectedDate } = useCalendar();
    const { events } = useEvent();

    if (calendarFns.isDateIn(calendar, date)) {
        return (
            <div
                className={cl(
                    "w-full h-full",
                    "flex flex-col flex-1",
                    "rounded cursor-pointer overflow-hidden",
                    "hover:bg-prm-lg2 active:bg-prm-lg",
                    "dark:hover:bg-prm-dk2 dark:active:bg-prm-dk",
                )}
                onClick={() => toggleSelectedDate(date)}
            >
                <div className="text-center">
                    <Text size="xl">
                        {dateFns.formatDay(date)}
                    </Text>
                </div>
                <div className="flex flex-col gap-1">
                    {dateEvents.map((evt) => (
                        <div key={evt}>
                            <Text size="xs">
                                {events.find((e) => e.id === evt)?.name}
                            </Text>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div
            className={cl(
                "w-full h-full",
                "flex flex-col flex-1",
                "overflow-hidden text-center bg-gray-200 dark:bg-drk-dk3",
                "transition-colors duration-100",
            )}
        >
            <Text size="xl" disabled>
                {dateFns.formatDay(date)}
            </Text>
        </div>
    );
}
