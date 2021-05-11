import styled from "styled-components";
import { Colors } from "utils/colors";

export const FooterContainer = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${Colors.white};

  width: 100%;

  display: flex;
  justify-content: center;

  padding-bottom: 16px;

  a {
    margin-left: 4px;
    text-decoration: underline;
    color: ${Colors.azoxo};
  }
`;
