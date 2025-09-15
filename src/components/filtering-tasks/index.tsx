import DatePicker from "../date-picker";
import Select from "../select";
import Input from "../input";
import type { IFilteringTasksProps } from "../../types";

const FilteringTasks = ({
  categories,
  search,
  selectedCategory,
  selectedDate,
  isCompleted,
  handleSearch,
  handleDate,
  handleCategory,
  handleCompleted
}: IFilteringTasksProps) => {
  return (
    <div className="flex flex-col space-y-2.5 bg-white px-3 py-4 rounded-lg mb-6">
      <p className="font-bold">Filtering tasks:</p>
      <div className="grid sm:grid-cols-2 gap-2">
        <DatePicker
          value={selectedDate}
          onChange={handleDate}
          className="bg-[#E6D9CB]"
        />
        <Select
          value={selectedCategory}
          onChange={handleCategory}
          className="w-full rounded-md px-3 py-2 bg-[#E6D9CB] outline-none"
          placeholder="Select or type category"
          options={categories?.map((cat) => ({ value: cat, label: cat }))}
        />
        <Input
          placeholder="Search name of task"
          className="w-full rounded-md px-3 py-2 bg-[#E6D9CB] outline-none"
          value={search}
          onChange={handleSearch}
        />

        <div className="w-full rounded-md px-3 py-2 flex space-x-2 items-center">
          <Input
            type="checkbox"
            checked={isCompleted}
            onChange={handleCompleted}
            className="h-5 w-5 cursor-pointer"
            classNameContainer="flex"
          />
          <p className="font-bold text-xs">
            {isCompleted ? "Completed" : "Non completed"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilteringTasks;
