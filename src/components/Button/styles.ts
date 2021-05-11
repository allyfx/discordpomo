import styled from "styled-components";
import { Colors } from "utils/colors";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: ${Colors.white};

  background-color: ${Colors.azoxo};
  border-radius: 16px;

  width: 320px;
  height: 72px;

  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.dark_azoxo};
  }
`;
