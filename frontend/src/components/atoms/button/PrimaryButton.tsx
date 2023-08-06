import type { ReactNode } from "react";
import { BaseButton } from "./BaseButton";
import { cl } from "@/lib/cl";

type props = {
    readonly children: ReactNode;
    readonly onClick?: () => void;
    readonly title?: string;
    readonly form?: string;
};

export function PrimaryButton(
    { children, title, onClick, form }: props,
) {
    return (
        <BaseButton
            title={title}
            onClick={onClick}
            form={form}
            className={cl(
                "text-white",
                "bg-primary dark:bg-primary-dark",
                "active:bg-primary-dark dark:active:bg-primary-darker",
                "transition-colors duration-300",
            )}
        >
            {children}
        </BaseButton>
    );
}
