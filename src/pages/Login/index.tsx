import { LoginContainer } from "./styles";

import discordLogo from "assets/discord-logo.svg";
import { Button } from "components/Button";

export function Login() {
  return (
    <LoginContainer>
      <img src={discordLogo} alt="Discord logo" />
      <Button>Entrar</Button>
    </LoginContainer>
  );
}
