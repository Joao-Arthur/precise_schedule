import { calendarFns } from "frontend_core";
import { useSession } from "@/features/session/useSession";
import { useCalendar } from "@/features/calendar/useCalendar";
import { useFormatMonth } from "@/features/date/useFormatMonth";
import { If } from "@/components/atoms/layout/If";
import { Text } from "@/components/atoms/Text";
import { RoundButton } from "@/components/atoms/extraButton/RoundButton";
import { Icon } from "@/components/atoms/Icon";
import { HoverButton } from "@/components/atoms/extraButton/HoverButton";
import { Header } from "@/content/base/Header";
import { Table } from "@/content/calendar/table/Table";
import { Sidebar } from "@/content/calendar/sidebar/Sidebar";
import { LoadEvents } from "@/content/calendar/LoadEvents";

export default function Calendar() {
    const logged = useSession().logged();
    const { year, month, setCurrentMonth, prev, next } = useCalendar();
    const formatMonth = useFormatMonth();

    return (
        <>
            <Header
                left={
                    <>
                        <div className="flex justify-center gap-1">
                            <RoundButton onClick={prev}>
                                <Icon name="<" size={9} color="white" className="p-2" />
                            </RoundButton>
                            <RoundButton onClick={next}>
                                <Icon name=">" size={9} color="white" className="p-2" />
                            </RoundButton>
                        </div>
                        <Text size="2xl" color="white">
                            <div className="capitalize">
                                {year} {formatMonth(month)}
                            </div>
                        </Text>
                        <If condition={!calendarFns.isCurrent({ year, month })}>
                            <HoverButton onClick={setCurrentMonth}>Today</HoverButton>
                        </If>
                    </>
                }
            />
            <main className="flex h-full">
                <Table />
                <Sidebar />
                {logged ? <LoadEvents /> : null}
            </main>
        </>
    );
}
