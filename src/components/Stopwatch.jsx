import { useEffect, useState } from "react";
import "./stopwatch.css";

const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalid;
    if (isRunning) {
      intervalid = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (intervalid) clearInterval(intervalid);
    };
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-card">
        <h1 className="title">Stopwatch</h1>
        <h2 className="stopwatch">{count}</h2>
        <div className="button-group">
          <button className="btn start" onClick={handleStart}>
            Start
          </button>
          <button className="btn stop" onClick={handleStop}>
            Stop
          </button>
          <button className="btn reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;