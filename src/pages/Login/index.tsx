import { useEffect, useContext } from "react";

import { LoginContainer } from "./styles";

import discordLogo from "assets/discord-logo.svg";
import { Button } from "components/Button";

import { ApplicationContext } from "contexts/ApplicationContext";
import { api } from "services/api";

export function Login() {
  const { authenticateUser } = useContext(ApplicationContext);
  
  function handleSubmit() {
    const clientId = process.env.REACT_APP_DISCORD_APPLICATION_ID;
    const redirectUri = process.env.REACT_APP_REDIRECT_URL;
    const scope = "identify";

    const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;

    window.location.href = discordAuthUrl;
  }

  useEffect(() => {
    async function getData() {
      const paramsString = new URLSearchParams(window.location.search);
      if (paramsString.has("code")) {
        const code = paramsString.get("code");
        const client_id = process.env.REACT_APP_DISCORD_APPLICATION_ID;
        const client_secret = process.env.REACT_APP_DISCORD_CLIENT_SECRET;
        const redirect_uri = process.env.REACT_APP_REDIRECT_URL;

        const body = "grant_type=authorization_code"
          + `&client_id=${client_id}`
          + `&client_secret=${client_secret}`
          + `&code=${code}`
          + `&redirect_uri=${redirect_uri}`

        try {
          const { data } = await api.post("/oauth2/token", body, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          });

          const { data: user } = await api.get("/users/@me", {
            headers: {
              Authorization: 'Bearer ' + data.access_token,
            }
          })

          authenticateUser({
            avatar: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`,
            username: user.username
          });
        } catch(err) {
          console.log(err);
        }
      }
    }

    getData();
  }, [authenticateUser]);

  return (
    <LoginContainer>
      <img src={discordLogo} alt="Discord logo" />
      <Button onClick={handleSubmit}>Entrar</Button>
    </LoginContainer>
  );
}
