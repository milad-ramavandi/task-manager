import { useEffect, useState } from "react";

const useMultiStep = () => {
  const [step, setStep] = useState<number>(0);

  const next = () => {
    localStorage.setItem("step", "1");
    setStep(1);
  };
  useEffect(() => {
    const stored = localStorage.getItem("step");
    if (stored) {
      setStep(Number(stored))
    }
  }, [])
  
  return {
    step,
    next,
  };
};

export default useMultiStep;
