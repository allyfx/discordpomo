import { useState } from "react";

import { UserProfile } from "components/UserProfile";

import { Input } from "components/Input";

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
  const [messages, setMessages] = useState<IMessages>({
    pause: "",
    pomodoro: ""
  });

  return (
    <HomeContainer>
      <header>
        <UserProfile />
      </header>
      <HomeContent>
        <section></section>
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
