import clss from "classnames";
import { Icon, names } from "./Icon";
import { TransparentButton } from "./button/TransparentButton";

type props = {
    readonly name: names;
    readonly onClick?: () => void;
    readonly size: "medium" | "big";
};

export function ButtonIcon({ name, onClick, size }: props) {
    return (
        <TransparentButton onClick={onClick}>
            <Icon
                name={name}
                className={clss(
                    "fill-gray-500 box-content",
                    {
                        "w-6 h-6 p-2": size === "medium",
                        "w-9 h-9 p-3": size === "big",
                    },
                )}
            />
        </TransparentButton>
    );
}
