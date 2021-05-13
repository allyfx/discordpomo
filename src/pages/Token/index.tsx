import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { ApplicationContext } from "contexts/ApplicationContext";

import discordLogo from "assets/discord-logo.svg";
import { Input } from "components/Input";
import { Button } from "components/Button";

import { TokenContainer, Form } from "./styles";

export function Token() {
  const history = useHistory();

  const { authenticateUser, user } = useContext(ApplicationContext);
  const [token, setToken] = useState('');

  function handleSubmit() {
    authenticateUser({
      ...user,
      token,
    });

    history.push("/home");
  }

  useEffect(() => {
    if (!user.avatar && !user.username)
      history.push('/');
  }, [history, user]);

  return (
    <TokenContainer>
      <img src={discordLogo} alt="Discord logo" />
      <Form>
        <Input
          placeholder="Token de acesso"
          onChange={(e) => setToken(e.currentTarget.value)}
          value={token}
        />
        <Button onClick={handleSubmit}>Entrar</Button>
      </Form>
    </TokenContainer>
  )
}
