import {
  ArrowLeftToLine,
  ArrowRightFromLine,
  Edit2,
  Trash2,
} from "lucide-react";
import type { ITaskItemProps } from "../../types";
import React, { useState } from "react";
import Button from "../button";
import Input from "../input";
import { useTasksStore } from "../../store";
import useModal from "../../hooks/useModal";
import Modal from "../modal";

export default function TaskItem({ task }: ITaskItemProps) {
  const { toggleTask, toggleCompleteTask } = useTasksStore();
  const { isOpenModal, onOpenModal, onCloseModal } = useModal();
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <React.Fragment>
      <div className="relative flex items-center">
        <div
          className={`flex items-center gap-2 p-3 rounded-lg w-full bg-[#F3EFEE] shadow-sm transition-transform duration-300 ${
            task.isCompleted ? "opacity-45" : ""
          } ${clicked ? "-translate-x-24" : "translate-x-0"}`}
        >
          <Input
            type="checkbox"
            checked={task.isCompleted}
            className="h-4 w-4 cursor-pointer"
            classNameContainer="flex"
            onChange={() => toggleCompleteTask(task.id)}
          />
          <h3
            className={`flex-1 ${
              task.isCompleted ? "line-through text-gray-400" : ""
            }`}
          >
            {task.title}
          </h3>
        </div>

        {!task?.isCompleted && (
          <div
            className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center"
            onClick={() => setClicked((prev) => !prev)}
          >
            {!clicked ? (
              <ArrowLeftToLine className="w-4 h-4 text-gray-400 cursor-pointer" />
            ) : (
              <ArrowRightFromLine className="w-4 h-4 text-gray-400 cursor-pointer absolute -left-10" />
            )}

            {clicked && (
              <div
                className={`flex gap-2 mt-2 opacity-0 transition-opacity duration-300 ${
                  clicked ? "opacity-100" : ""
                }`}
              >
                <Button
                  className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 cursor-pointer"
                  onClick={onOpenModal}
                  children={<Edit2 className="w-4 h-4 text-blue-600" />}
                />
                <Button
                  className="p-2 rounded-full bg-red-100 hover:bg-red-200 cursor-pointer"
                  onClick={() => toggleTask(task)}
                  children={<Trash2 className="w-4 h-4 text-red-600" />}
                />
              </div>
            )}
          </div>
        )}
      </div>
      {isOpenModal && (
        <Modal onCloseModal={onCloseModal} mode="edit" task={task} />
      )}
    </React.Fragment>
  );
}
