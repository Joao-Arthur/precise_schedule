import type { ReactNode } from "react";
import clss from "classnames";
import { If } from "@/components/atoms/layout/If";
import { Button } from "@/components/atoms/button/Button";
import { Text } from "@/components/atoms/typography/Text";

export type modalProps = {
    readonly children: ReactNode;
    readonly title: string;
    readonly formId: string;
    readonly onCancel: () => void;
    readonly onConfirm?: () => void;
};

export function MobileModal({
    children,
    title,
    formId,
    onCancel,
    onConfirm,
}: modalProps) {
    return (
        <div className="fixed w-full h-full bg-block z-10">
            <div
                className={clss(
                    "flex flex-col absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2",
                    "bg-white dark:bg-dark",
                    "w-full h-full",
                )}
            >
                <div
                    className={clss(
                        "p-3 text-2xl",
                        "border-b border-gray-300 dark:border-gray-500",
                    )}
                >
                    <Text className="select-none m-0">{title}</Text>
                </div>
                <div className="flex-1 overflow-auto p-3">
                    {children}
                </div>
                <div
                    className={clss(
                        "flex p-5 flex-col gap-3",
                        "border-t border-gray-300 dark:border-gray-500",
                    )}
                >
                    <Button onClick={onCancel} secondary>
                        CANCEL
                    </Button>
                    <If condition={!!onConfirm}>
                        <Button onClick={onConfirm} form={formId}>
                            CONFIRM
                        </Button>
                    </If>
                </div>
            </div>
        </div>
    );
}