import styled from "styled-components";

export const ContainerStyle = styled.div`
  width: 100%;
  max-width: ${p => p.theme.widthContainer};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
`;
