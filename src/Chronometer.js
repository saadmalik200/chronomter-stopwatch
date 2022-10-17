import { useState, useEffect } from "react";

function Chronometer() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
    //   console.log(`Running`);
  }, [isActive, isPaused]);

  const startHandler = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  const stopHandler = () => {
    setIsPaused(!isPaused);
  };
  const resetHandler = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <div>
        <h1 className="text-center text-[2rem] mb-5">React Chrono</h1>
        <div className="bg-white p-5">
          <div className="bg-blue-200 w-[15rem] h-[5rem] mb-3 flex justify-center items-center text-[2rem]">
            <p>{time}</p>
          </div>
          <div className="flex gap-3 justify-center">
            <button onClick={startHandler}>START</button>
            <button onClick={stopHandler}>STOP</button>
            <button onClick={resetHandler}>RESET</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chronometer;
