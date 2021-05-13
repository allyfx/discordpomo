import { useState, useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { Timer } from "./Timer";

import { UserProfile } from "components/UserProfile";
import { Input } from "components/Input";

import { api } from "services/api";
import { ApplicationContext } from "contexts/ApplicationContext";

import {
  HomeContainer,
  HomeContent
} from "./styles";

interface IMessages {
  pomodoro: string;
  pause: string;
}

const defaultMessages = {
  pause: "Pausa de 15m",
  pomodoro: "Disponível pra falar"
}

export function Home() {
  const history = useHistory();
  const { user } = useContext(ApplicationContext);

  const [state, setState] = useState<"pomodoro" | "pause">("pomodoro");
  const [messages, setMessages] = useState<IMessages>({
    pause: "",
    pomodoro: ""
  });

  async function handlePause() {
    setState("pause");
    const pauseMessage = messages.pause
      ? messages.pause
      : defaultMessages.pause;

    await api.patch("/v9/users/@me/settings", {
      status: "idle",
      custom_status: {
        text: pauseMessage
      }
    }, {
      headers: {
        "Authorization": user.token,
      }
    });

    if (Notification.permission === 'granted') {
      new Notification("Hora de trabalhar! 😢");
    }
  }

  async function handlePomodoro() {
    setState("pomodoro");
    const pomodoroMessage = messages.pomodoro
      ? messages.pomodoro
      : defaultMessages.pomodoro;

    await api.patch("/v9/users/@me/settings", {
      status: "online",
      custom_status: {
        text: pomodoroMessage
      }
    }, {
      headers: {
        "Authorization": user.token,
      }
    });

    if (Notification.permission === 'granted') {
      new Notification("Pausa de 15 minutos! 🤩");
    }
  }

  useEffect(() => {
    if (!user.username && !user.avatar && !user.token)
      history.push("/");
  }, [history, user]);

  return (
    <HomeContainer>
      <header>
        <UserProfile />
      </header>
      <HomeContent>
        <section>
          <Timer
            state={state}
            handlePause={handlePause}
            handlePomodoro={handlePomodoro}
          />
        </section>
        <section className="section_input_fields">
          <Input
            label="Mensagem para status “Pomodoro”:"
            onChange={(e) =>
              setMessages(
                {
                  ...messages,
                  pomodoro: e.currentTarget.value
              })}
            placeholder={defaultMessages.pomodoro}
            value={messages.pomodoro}
          />
          <Input
            label="Mensagem para status “Pausa”:"
            onChange={(e) =>
              setMessages(
                {
                  ...messages,
                  pause: e.currentTarget.value
              })}
            placeholder={defaultMessages.pause}
            value={messages.pause}
          />
        </section>
      </HomeContent>
    </HomeContainer>
  );
}
