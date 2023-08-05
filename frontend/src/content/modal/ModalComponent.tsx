import type { ReactNode } from "react";
import clss from "classnames";
import { Button } from "@/components/atoms/button/Button";
import { Text } from "@/components/atoms/Text";
import { useDevice } from "@/lib/device/useDevice";

export type modalProps = {
    readonly children: ReactNode;
    readonly title: string;
    readonly formId?: string;
    readonly onCancel: () => void;
    readonly onConfirm?: () => void;
};

export function ModalComponent({
    children,
    title,
    formId,
    onCancel,
    onConfirm,
}: modalProps) {
    const device = useDevice();
    const isMobile = device.isMobile();

    return (
        <div className="fixed w-full h-full bg-block">
            <div
                className={clss(
                    "flex flex-col absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2",
                    "bg-white dark:bg-dark",
                    isMobile
                        ? "w-full h-full"
                        : "w-120 max-w-4/5 border border-gray-300 dark:border-gray-500 rounded",
                )}
            >
                <div
                    className={clss(
                        "py-5 px-7 break-all bg-primary",
                        "shadow-sm shadow-gray-500",
                    )}
                >
                    <Text size="2xl" color="white" selectable>{title}</Text>
                </div>
                <div className="flex-1 overflow-auto p-3">
                    {children}
                </div>
                <div
                    className={clss(
                        isMobile ? "flex-col-reverse p-4 gap-4" : "p-2 justify-end gap-2",
                        "flex border-t border-gray-300 dark:border-gray-500",
                    )}
                >
                    <Button onClick={onCancel} secondary>
                        CANCEL
                    </Button>
                    <Button onClick={onConfirm} form={formId}>
                        CONFIRM
                    </Button>
                </div>
            </div>
        </div>
    );
}
