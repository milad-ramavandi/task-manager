import type { ICategotySectionProps } from "../../types";
import TaskItem from "../task-item";

export default function CategorySection({ title, tasks }: ICategotySectionProps) {

  if (!tasks.length) return null;
  return (
    <div className="mb-6">
      <h2 className="font-semibold text-sm mb-2 text-[#D1A28B] capitalize">{title}</h2>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </div>
  );
}
