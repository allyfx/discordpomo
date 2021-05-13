import styled from "styled-components";
import { Colors } from "utils/colors";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  font-weight: 500;
  color: ${Colors.white};

  border: 0;
  background-color: ${Colors.azoxo};
  border-radius: 16px;

  width: 320px;
  min-height: 72px;

  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.dark_azoxo};
  }
`;
