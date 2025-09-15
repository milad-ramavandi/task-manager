import type {
  ButtonHTMLAttributes,
  ChangeEvent,
  InputHTMLAttributes,
} from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
  category: string;
  date: string;
}

export interface IAddTaskForm {
  title: string;
  category: string;
  date: string;
}

export interface ITasksStore {
  tasks: ITask[];
  toggleTask: (task: ITask) => void;
  toggleCompleteTask: (id: string) => void;
  updateTask: (task: ITask) => void;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string | number;
  onClick?: () => void;
  children?: React.ReactNode;
}

export interface IOption {
  value: string;
  label: string;
}

export interface ISelectProps extends InputHTMLAttributes<HTMLInputElement> {
  className: string;
  label?: string;
  options: IOption[];
  register?: UseFormRegisterReturn;
  error?: FieldError;
}
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  classNameContainer?: string;
  error?: FieldError;
  register?: UseFormRegisterReturn;
}

export interface ICategotySectionProps {
  title: string;
  tasks: ITask[];
}

export interface ITaskItemProps {
  task: ITask;
}

export interface ITaskFormProps {
  task?: ITask;
  mode: string;
  onCloseModal: () => void;
}

export interface IModalProps extends ITaskFormProps {}

export interface IIntroProps {
  next: () => void;
}

export interface IFilteringTasksProps {
  categories: string[];
  search: string;
  selectedCategory: string;
  selectedDate: string;
  isCompleted: boolean;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDate: (date: string) => void;
  handleCategory: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCompleted: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ICalenderProps {
  value: string;
  onChange: (date: string) => void;
}

export interface IDatePickerProps extends ICalenderProps {
  className:string;
}
