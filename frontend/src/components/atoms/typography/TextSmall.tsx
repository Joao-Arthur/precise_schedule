import type { ReactNode } from "react";
import clss from "classnames";

type props = {
    readonly children: ReactNode;
};

export function TextSmall({ children }: props) {
    return (
        <span
            className={clss(
                "select-none",
                "transition-colors duration-500",
                "text-xs dark:text-pastel-gray",
            )}
        >
            {children}
        </span>
    );
}
