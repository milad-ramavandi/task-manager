import Intro from "./components/intro";
import TasksList from "./components/tasks-list";
import useMultiStep from "./hooks/useMultiStep";

function App() {
  const { step, next } = useMultiStep();
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      {step === 0 && <Intro next={next} />}
      {step === 1 && <TasksList />}
    </div>
  );
}

export default App;
