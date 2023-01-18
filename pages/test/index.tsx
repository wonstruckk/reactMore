import { useState } from "react";

export default function testCode() {
  const [value, setValue] = useState(1);
  const [timer, setTimer] = useState(1);
  const [isStarted, setIsStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [sum, setSum] = useState(0);

  const handleClickStart = () => {
    setIsStarted((cur) => !cur);
    if (isStarted) {
      clearInterval(intervalId);
      setSum(() => value + timer);
    } else {
      setIntervalId(
        setInterval(() => {
          setValue((cur) => cur + 1);
        }, 1000)
      );
    }
  };
  const handleClickUp = () => {
    setTimer((cur) => cur + 1);
  };
  const handleClickDown = () => {
    setTimer((cur) => cur - 1);
  };
  return (
    <>
      <div>합{sum ? sum : ""}</div>
      <div>타이머{value}</div>
      <div>
        타이머타임?{timer}
        <div onClick={handleClickUp}>업</div>
        <div onClick={handleClickDown}>다운</div>
      </div>
      <div onClick={handleClickStart}>{isStarted ? "stop" : "start"}</div>
    </>
  );
}
