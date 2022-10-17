import { useState, useEffect } from "react";

function Chronometer() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState("00");

  useEffect(() => {
    let interval = null;
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
    setTime("00");
  };

  const minutes = Math.floor((time / 60000) % 60);
  const seconds = Math.floor((time / 1000) % 60);
  const hundredths = (time / 10) % 100;

  const addZero = (n) => {
    return n < 10 ? "0" + n : n;
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <div>
        <h1 className="text-center text-[2rem] mb-5">React Chrono</h1>
        <div className="bg-white p-5">
          <div className="bg-blue-200 w-[15rem] h-[5rem] mb-3 flex justify-center items-center text-[2.8rem]">
            <h1>
              {addZero(minutes)}:{addZero(seconds)}:{addZero(hundredths)}
            </h1>

            {/* <p>
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

            {/* <p>{"0" + time.toString().slice(-3, -1)}</p> */}
            {/* <p>
              {" "}
              {time.toString().slice(-3, -1).length === 1
                ? "00" + time.toString().slice(-3, -2)
                : time.toString().slice(-3, -1)}
            </p> */}
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
