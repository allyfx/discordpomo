import styled from "styled-components";

import { Colors } from "utils/colors";

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 78px 49px;

  border: 2px solid ${Colors.azoxo};
  border-radius: 16px;
`;

export const Status = styled.h2`
  color: ${Colors.cinxo};
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  text-transform: uppercase;
`;

export const Time = styled.h1`
  color: ${Colors.white};
  font-size: 112px;
  line-height: 131px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 16px;

  margin: 64px 0px;
`;

export const ResetTimer = styled.span`
  margin-top: 24px;

  font-weight: 500;
  font-size: 16px;
  color: ${Colors.white};
  text-align: center;

  cursor: pointer;
`;
