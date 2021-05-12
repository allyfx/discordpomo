import { ApplicationContext } from "contexts/ApplicationContext";
import { useContext } from "react";

import {
  UserProfileContainer,
  Avatar,
  UserName
} from "./styles";

export function UserProfile() {
  const { user } = useContext(ApplicationContext);

  return (
    <UserProfileContainer>
      <Avatar src={user.avatar} />
      <UserName>{user.username}</UserName>
    </UserProfileContainer>
  )
}