import type { MeetingEvent } from "@/features/event/event";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { InputWrapper } from "@/components/atoms/form/InputWrapper";
import { Group } from "@/components/atoms/layout/Group";
import { TextInput } from "@/components/atoms/input/TextInput";
import { SelectInput } from "@/components/atoms/input/SelectInput";
import { DateInput } from "@/components/atoms/input/DateInput";
import { TimeInput } from "@/components/atoms/input/TimeInput";
import { ToggleInput } from "@/components/atoms/input/ToggleInput";
import { frequencyOptions } from "./frequencyOptions";

type props = {
    readonly event: MeetingEvent;
    readonly onSubmit: (form: MeetingEvent) => void;
    readonly isLoading: boolean;
};

export function MeetingEdit({ onSubmit, isLoading, event }: props) {
    const { register, handleSubmit, watch, setValue } = useForm<MeetingEvent>();
    const required = true;
    const disabled = isLoading;

    const watchFrequency = watch("frequency");
    const canRepeatWeekend = watchFrequency ? ["1D", "2D"].includes(watchFrequency) : true;

    useEffect(() => {
        if (!canRepeatWeekend) {
            setValue("weekendRepeat", false);
        }
    }, [watchFrequency]);

    return (
        <form id="MeetingEdit" onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper name="name" title="Name">
                <TextInput {...register("name", { required, disabled, value: event.name })} />
            </InputWrapper>
            <InputWrapper name="day" title="Day">
                <DateInput {...register("day", { required, disabled, value: event.day })} />
            </InputWrapper>
            <Group>
                <InputWrapper name="begin" title="Begin">
                    <TimeInput {...register("begin", { required, disabled, value: event.begin })} />
                </InputWrapper>
                <InputWrapper name="end" title="End">
                    <TimeInput {...register("end", { required, disabled, value: event.end })} />
                </InputWrapper>
            </Group>
            <Group>
                <InputWrapper name="frequency" title="Frequency">
                    <SelectInput
                        {...register("frequency", { required, disabled, value: event.frequency })}
                        options={frequencyOptions}
                    />
                </InputWrapper>
                <InputWrapper name="weekendRepeat" title="Repeats on weekend">
                    <ToggleInput
                        {...register("weekendRepeat", {
                            required,
                            disabled: disabled || !canRepeatWeekend,
                            value: event.weekendRepeat,
                        })}
                    />
                </InputWrapper>
            </Group>
        </form>
    );
}
