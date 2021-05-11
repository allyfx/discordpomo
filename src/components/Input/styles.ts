import styled from "styled-components";
import { Colors } from "utils/colors";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputLabel = styled.label`
  margin-left: 16px;
  margin-bottom: 8px;

  font-weight: 500;
  color: ${Colors.white};
  font-size: 16px;
  text-align: start;
`;

export const InputElement = styled.input`
  width: 384px;
  height: 64px;

  background-color: ${Colors.black_700};
  border-radius: 16px;

  padding-left: 16px;

  border: none;
  outline: none;

  font-size: 24px;
  color: ${Colors.white};

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
    font-style: italic;
  }
`;
