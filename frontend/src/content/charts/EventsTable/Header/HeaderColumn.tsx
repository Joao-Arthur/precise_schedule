import { ButtonIcon } from "@/components/atoms/ButtonIcon";
import { Text } from "@/components/atoms/typography/Text";

type props = {
    readonly title: string;
};

export function HeaderColumn({ title }: props) {
    return (
        <th className="bg-gray-100 border-l border-r border-gray-300 dark:border-gray-500 transition-colors duration-500 dark:bg-dark">
            <Text className="font-normal select-none">{title}</Text>
            <ButtonIcon
                name="threeDots"
                className="float-right -ml-100 mr-0"
            />
        </th>
    );
}
