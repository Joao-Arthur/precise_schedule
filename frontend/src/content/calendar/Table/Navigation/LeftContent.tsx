import classNames from "classnames";
import { useCalendar } from "@/features/calendar/useCalendar";
import { useSession } from "@/features/session/useSession";
import { isCurrentDate } from "@/features/calendar/isCurrentDate";
import { ButtonIcon } from "@/components/atoms/ButtonIcon";
import { Link } from "@/components/atoms/Link";
import { If } from "@/components/atoms/layout/If";

export function LeftContent() {
    const { logged } = useSession();
    const { year, month, setCurrentMonth } = useCalendar();

    return (
        <>
            <If condition={logged()}>
                <Link to="/charts">
                    <ButtonIcon
                        title="activities"
                        name="chart"
                        type="bigicon"
                    />
                </Link>
            </If>
            <If condition={!isCurrentDate({ year, month })}>
                <button
                    className={classNames(
                        "h-10 px-1 rounded transition-colors hover:duration-200 duration-500",
                        "text-gray-800 bg-white",
                        "border mx-1 text-lg",
                        "hover:bg-pastel-gray active:bg-pastel-gray border-gray-300",
                        "dark:text-pastel-gray dark:bg-dark-light dark:hover:bg-dark dark:active:bg-dark dark:border-gray-500",
                    )}
                    onClick={() => setCurrentMonth()}
                >
                    Today
                </button>
            </If>
        </>
    );
}
