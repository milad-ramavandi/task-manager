import type { IIntroProps, ITask } from "../../types";
import dayjs from "dayjs";
import Button from "../button";
import { useTasksStore } from "../../store";
const suggestedTasks: ITask[] = [
  {
    id: "1",
    title: "Exercise",
    isCompleted: false,
    category: "Health",
    date: dayjs().format("YYYY-MM-DD"),
  },
  {
    id: "2",
    title: "Read books",
    isCompleted: false,
    category: "Personal",
    date: dayjs().format("YYYY-MM-DD"),
  },
  {
    id: "3",
    title: "Meditate",
    isCompleted: false,
    category: "Health",
    date: dayjs().format("YYYY-MM-DD"),
  },
  {
    id: "4",
    title: "Plan meals",
    isCompleted: false,
    category: "Personal",
    date: dayjs().format("YYYY-MM-DD"),
  },
  {
    id: "5",
    title: "Water plants",
    isCompleted: false,
    category: "House",
    date: dayjs().format("YYYY-MM-DD"),
  },
  {
    id: "6",
    title: "Journal",
    isCompleted: false,
    category: "Personal",
    date: dayjs().format("YYYY-MM-DD"),
  },
  {
    id: "7",
    title: "Stretch for 15 mins",
    isCompleted: false,
    category: "Health",
    date: dayjs().format("YYYY-MM-DD"),
  },
  {
    id: "8",
    title: "Review goals before bed",
    isCompleted: false,
    category: "Personal",
    date: dayjs().format("YYYY-MM-DD"),
  },
];

const Intro = ({ next }: IIntroProps) => {
  const {tasks, toggleTask} = useTasksStore()
  return (
    <section className="w-[500px] h-[670px] mx-auto relative p-4 rounded-md">
      <img
        src="./Grad_18 1.png"
        alt="cover"
        className="absolute inset-0 object-cover w-full h-full -z-50"
      />
      <h1 className="z-50 text-4xl font-bold mt-40 mb-24">
        Pick some new <br /> tasks to get started
      </h1>
      <p className="text-[#D1A28B] mb-3 text-sm font-bold">Choose some tasks:</p>
      <div className="flex flex-wrap gap-2">
        {suggestedTasks.map((task) => (
          <button
            key={task?.id}
            onClick={() => toggleTask(task)}
            className={`px-4 py-2 rounded-full text-sm transition cursor-pointer
                ${
                  tasks.includes(task)
                    ? "bg-black text-white"
                    : "bg-[#F3EFEE] text-gray-700"
                }`}
          >
            {task?.title}
          </button>
        ))}
      </div>
      <Button
        label="Continue"
        onClick={() => next()}
        className={`w-full py-3 rounded-lg bg-black text-white font-medium mt-10 cursor-pointer ${
          tasks?.length < 1 && "opacity-50 !cursor-not-allowed"
        }`}
        disabled={tasks?.length < 1}
      />
    </section>
  );
};

export default Intro;
