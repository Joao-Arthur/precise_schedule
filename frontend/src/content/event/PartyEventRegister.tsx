import type { PartyEvent } from "@/features/event/event";
import { useForm } from "react-hook-form";
import { ModalForm } from "@/components/atoms/ModalForm";
import { InputWrapper } from "@/components/atoms/form/InputWrapper";
import { Group } from "@/components/atoms/layout/Group";
import { TextInput } from "@/components/atoms/input/TextInput";
import { DateInput } from "@/components/atoms/input/DateInput";
import { TimeInput } from "@/components/atoms/input/TimeInput";

type props = {
    readonly onSubmit: (form: PartyEvent) => void;
    readonly isLoading: boolean;
};

export function PartyEventRegister({ onSubmit, isLoading }: props) {
    const { register, handleSubmit } = useForm<PartyEvent>();

    return (
        <ModalForm
            id="PartyEventRegister"
            onSubmit={handleSubmit(onSubmit)}
        >
            <InputWrapper name="name" title="Name">
                <TextInput
                    {...register("name", {
                        required: true,
                        disabled: isLoading,
                    })}
                />
            </InputWrapper>
            <InputWrapper name="day" title="Day">
                <DateInput
                    {...register("day", {
                        required: true,
                        disabled: isLoading,
                    })}
                />
            </InputWrapper>
            <Group>
                <InputWrapper name="begin" title="Begin">
                    <TimeInput
                        {...register("begin", {
                            required: true,
                            disabled: isLoading,
                        })}
                    />
                </InputWrapper>
                <InputWrapper name="end" title="End">
                    <TimeInput
                        {...register("end", {
                            required: true,
                            disabled: isLoading,
                        })}
                    />
                </InputWrapper>
            </Group>
        </ModalForm>
    );
}
