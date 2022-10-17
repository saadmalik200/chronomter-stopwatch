import { useState, useEffect } from "react";

function Chronometer() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState("000");

  useEffect(() => {
    let interval = null;
    // countDown(time);
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => +time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
    //   console.log(`Running`);
  }, [isActive, isPaused, time]);

  const startHandler = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  const stopHandler = () => {
    setIsPaused(!isPaused);
  };
  const resetHandler = () => {
    setIsActive(false);
    setTime("000");
  };

  const days = 1000 * 60 * 60 * 24;
  const hours = 1000 * 60 * 60;
  const minutes = 1000 * 60;
  const seconds = 1000;

  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <div>
        <h1 className="text-center text-[2rem] mb-5">React Chrono</h1>
        <div className="bg-white p-5">
          <div className="bg-blue-200 w-[15rem] h-[5rem] mb-3 flex justify-center items-center text-[2rem]">
            <p>
              {Math.floor(((time % days) % hours) / minutes).toString()
                .length === 1
                ? "0" + Math.floor(((time % days) % hours) / minutes)
                : Math.floor(((time % days) % hours) / minutes)}
            </p>
            <p>:</p>
            <p>
              {Math.floor(
                (((time % days) % hours) % minutes) / seconds
              ).toString().length === 1
                ? "0" +
                  Math.floor((((time % days) % hours) % minutes) / seconds)
                : Math.floor((((time % days) % hours) % minutes) / seconds)}
            </p>
            <p>:</p>
            {/* <p>
              {time.toString().slice(-2).length === 0
                ? "00" + Math.floor(time.toString().slice(-3, -1))
                : Math.floor(time.toString().slice(-3, -1))}
            </p> */}
            <p>{time.toString().slice(-3, -1)}</p>
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
