import { useState, useEffect } from "react";

import { TimerContainer, Status, Time, ResetTimer } from "./styles";

import { Button } from "components/Button";

interface ITimerProps {
  state: "pomodoro" | "pause";
  handlePause: () => void;
  handlePomodoro: () => void;
}

interface ITimersProps {
  pomodoroInitialTimer: number;
  pauseInitialTimer: number;
}

let countdownTimeout: NodeJS.Timeout;

const timers: ITimersProps = {
  pomodoroInitialTimer: 25 * 60,
  pauseInitialTimer: 5 * 60,
}

export function Timer({
  handlePause,
  handlePomodoro,
  state,
}: ITimerProps) {
  const [isActive, setIsActive] = useState(false);

  const [timer, setTimer] = useState(
    state === "pomodoro"
      ? timers.pomodoroInitialTimer
      : timers.pauseInitialTimer
  );

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  function toggleTimer() {
    setIsActive(!isActive);
  }

  function resetTimer() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTimer(state === "pomodoro"
    ? timers.pomodoroInitialTimer
    : timers.pauseInitialTimer);
  }

  useEffect(() => {
    if (isActive && timer > 0) {
      countdownTimeout = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (isActive && timer === 0) {
      setTimer(state === "pomodoro"
      ? timers.pauseInitialTimer
      : timers.pomodoroInitialTimer);

      clearTimeout(countdownTimeout);
      setIsActive(false);

      if (state === "pomodoro")
        handlePause();
      else
        handlePomodoro();
    }
  }, [isActive, timer, state, handlePause, handlePomodoro]);

  return (
    <TimerContainer>
      <Status>{state === "pause" ? "pausa" : state}</Status>
      <Time>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</Time>
      <Button onClick={toggleTimer}>
        {isActive ? "PARAR" : "INICIAR"}
      </Button>
      <ResetTimer onClick={resetTimer}>Zerar Temporizador</ResetTimer>
    </TimerContainer>
  );
}
