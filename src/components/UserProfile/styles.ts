import styled from "styled-components";
import { Colors } from "utils/colors";

export const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.image`
  width: 80px;
  height: 80px;

  border-radius: 50px;
  background-color: ${Colors.azoxo};
`;

export const UserName = styled.div`
  margin-left: 16px;
  
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
  font-weight: 500;
  color: ${Colors.white};
`;
