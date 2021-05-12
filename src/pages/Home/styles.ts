import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 48px;

  height: 96.2vh;
`;

export const HomeContent = styled.div`
  padding-top: 78px;

  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 24px;

  section {
    width: 500px;
    height: 500px;
  }

  section.section_input_fields {
    display: flex;
    flex-direction: column;
    align-items: center;

    row-gap: 26px;
  }
`;
