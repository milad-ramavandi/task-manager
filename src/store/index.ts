import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ITasksStore } from "../types";



export const useTasksStore = create<ITasksStore>()(
  persist(
    (set) => ({
      tasks: [],
      toggleTask: (task) =>
        set((state) =>
          state.tasks.some((t) => t.id === task.id)
            ? { tasks: state.tasks.filter((t) => t.id !== task.id) }
            : { tasks: [...state.tasks, task] }
        ),
      toggleCompleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
          ),
        })),
        updateTask: (task) => set((state) => ({tasks: state.tasks.map((t) => t.id === task.id ? task : t)}))
    }),
    { name: "tasks" }
  )
);
