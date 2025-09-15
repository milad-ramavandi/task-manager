import CategorySection from "../category-section";
import Modal from "../modal";
import Button from "../button";
import EmptyBox from "../empty-box";
import { useTasksStore } from "../../store";
import useModal from "../../hooks/useModal";
import { Plus } from "lucide-react";
import useFilterTasks from "../../hooks/useFilterTasks";
import FilteringTasks from "../filtering-tasks";
import { useMemo } from "react";

const TasksList = () => {
  const { tasks } = useTasksStore();
  const { isOpenModal, onOpenModal, onCloseModal } = useModal();
  const {
    search,
    selectedCategory,
    selectedDate,
    isCompleted,
    filteredTasks,
    setSearch,
    setSelectedCategory,
    setSelectedDate,
    setIsCompleted,
  } = useFilterTasks();

  const categories = useMemo(() => tasks
    .map((t) => t.category)
    .reduce<string[]>((store, item) => {
      if (!store.includes(item)) {
        return [...store, item];
      }
      return store;
    }, []), [tasks])
  // const categories = Array.from(new Set(tasks.map((t) => t.category)));

  return (
    <section className="w-[500px] h-[670px] mx-auto p-4 bg-[#F9F5F4] relative rounded-md z-0">
      <h1 className="text-3xl font-bold mb-5">Tasks</h1>

      <FilteringTasks
        categories={categories}
        search={search}
        selectedCategory={selectedCategory}
        selectedDate={selectedDate}
        isCompleted={isCompleted}
        handleSearch={(e) => setSearch(e.target.value)}
        handleDate={(date) => setSelectedDate(date)}
        handleCategory={(e) => setSelectedCategory(e.target.value)}
        handleCompleted={(e) => setIsCompleted(e.target.checked)}
      />
      <>
        {filteredTasks.length < 1 ? (
          <EmptyBox />
        ) : (
          <div className="flex-1 overflow-y-auto h-[400px] scrollbar-hide">
            {categories.map((cat) => (
              <CategorySection
                key={cat}
                title={cat}
                tasks={filteredTasks.filter(
                  (t) => t.category === cat && !t?.isCompleted
                )}
              />
            ))}
            <CategorySection
              title="Completed"
              tasks={filteredTasks.filter((t) => t?.isCompleted)}
            />
          </div>
        )}
      </>
      <div className="flex justify-end absolute right-4 bottom-4">
        <Button
          type="button"
          className="w-16 h-16 bg-black text-white rounded-full text-2xl cursor-pointer flex justify-center items-center"
          onClick={onOpenModal}
          children={<Plus />}
        />
      </div>
      {isOpenModal && <Modal onCloseModal={onCloseModal} mode="create" />}
    </section>
  );
};

export default TasksList;
