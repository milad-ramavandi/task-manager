import { useMemo, useState } from "react";
import { useTasksStore } from "../store";
import dayjs from "dayjs";

const useFilterTasks = () => {
  const { tasks } = useTasksStore();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const filteredTasks = useMemo(
    () =>
      tasks.filter((t) => {
        const matchDate = selectedDate
          ? dayjs(t.date).isSame(selectedDate, "day")
          : true;
        const matchCategory = selectedCategory
          ? t.category.toLowerCase().startsWith(selectedCategory.toLowerCase())
          : true;
        const matchSearch = search
          ? t.title.toLowerCase().startsWith(search.toLowerCase())
          : true;

        const matchStatus = isCompleted ? t.isCompleted === isCompleted : true;
        return matchCategory && matchDate && matchSearch && matchStatus;
      }),
    [tasks, search, selectedDate, selectedCategory, isCompleted]
  );
  return {
    selectedDate,
    selectedCategory,
    search,
    isCompleted,
    filteredTasks,
    setSelectedDate,
    setSelectedCategory,
    setSearch,
    setIsCompleted,
  };
};

export default useFilterTasks;
