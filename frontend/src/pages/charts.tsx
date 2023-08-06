import { useAuthPage } from "@/features/session/useAuthPage";
import { EventsTable } from "@/content/charts/EventsTable/EventsTable";
import { AllEvents } from "@/content/charts/AllEvents";
import { EventsByCategory } from "@/content/charts/EventsByCategory";
import { Link } from "@/components/atoms/Link";
import { ButtonIcon } from "@/components/molecules/ButtonIcon";
import { Header } from "@/content/base/header/Header";

export default function Charts() {
    useAuthPage();

    return (
        <>
            <Header
                left={
                    <Link to="/">
                        <ButtonIcon name="calendar" size="medium" />
                    </Link>
                }
            />
            <main className="h-full">
                <div className="flex flex-col flex-1 h-full overflow-x-hidden">
                    <div className="flex-1 block overflow-x-hidden">
                        <div className="h-1/4 overflow-y-hidden">
                            <EventsTable />
                        </div>
                        <div className="h-1/4 overflow-y-hidden">
                            <AllEvents />
                        </div>
                        <div className="h-1/4 overflow-y-hidden">
                            <EventsByCategory />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
