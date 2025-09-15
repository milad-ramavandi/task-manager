import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useValidation from "../../hooks/useValidation";
import type { IAddTaskForm, ITask, ITaskFormProps } from "../../types";
import Input from "../input";
import Button from "../button";
import { useTasksStore } from "../../store";
import { useEffect } from "react";
import Select from "../select";
import DatePicker from "../date-picker";

export default function TaskForm({
  onCloseModal,
  task,
  mode,
}: ITaskFormProps) {
  const validation = useValidation();
  const { toggleTask, updateTask } = useTasksStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    reset,
  } = useForm<IAddTaskForm>({
    resolver: yupResolver(validation),
    defaultValues: {
      title: "",
      category: "",
      date: "",
    },
  });

  const onSubmit = (data: IAddTaskForm) => {
    if (mode === "create") {
      const newTask: ITask = {
        id: Date.now().toString(),
        title: data.title,
        category: data.category,
        date: data.date,
        isCompleted: false,
      };
      toggleTask(newTask);
    } else if (mode === "edit" && task) {
      const updatedTask: ITask = {
        ...task,
        title: data.title,
        category: data.category,
        date: data.date,
      };
      updateTask(updatedTask);
    }

    reset();
    onCloseModal();
  };

  useEffect(() => {
    if (mode === "edit" && task) {
      setValue("title", task.title);
      setValue("category", task.category);
      setValue("date", task.date);
    }
  }, [mode, task, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md"
    >
      <Input
        label="Title"
        className="w-full border rounded-md px-3 py-2"
        placeholder="Enter task title"
        error={errors?.title}
        register={register("title")}
      />

      <Select
        label="Category"
        placeholder="Select or type category"
        className="w-full border rounded-md px-3 py-2"
        register={register("category")}
        error={errors?.category}
        options={[
          { value: "Health", label: "Health" },
          { value: "Personal", label: "Personal" },
          { value: "House", label: "House" },
        ]}
      />

      <div>
        <label className="block text-sm font-medium mb-1">Date</label>
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <DatePicker
              className="border"
              value={field.value}
              onChange={(val) => field.onChange(val)}
            />
          )}
        />
        {errors.date && (
          <p className="text-sm text-red-500">{errors.date.message}</p>
        )}
      </div>

      <Button
        type="submit"
        label={mode === "create" ? "Add Task" : "Update Task"}
        className="w-full py-2 rounded-md bg-black text-white font-medium hover:bg-gray-800"
      />
    </form>
  );
}
