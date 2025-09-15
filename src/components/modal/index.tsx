import { CircleX } from "lucide-react";
import type { IModalProps, ITask } from "../../types";
import TaskForm from "../task-form";

const Modal = ({
  onCloseModal,
  task,
  mode,
}: IModalProps) => {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center">
      <div
        className="absolute inset-0 bg-gray-600 opacity-70 z-30"
        onClick={onCloseModal}
      />

      <div className="w-[95%] z-50">
        <CircleX
          className="w-5 h-5 absolute right-2 top-2 cursor-pointer text-gray-300 hover:text-white"
          onClick={onCloseModal}
        />
        <TaskForm
          onCloseModal={onCloseModal}
          mode={mode}
          task={task as ITask}
        />
      </div>
    </div>
  );
};

export default Modal;
