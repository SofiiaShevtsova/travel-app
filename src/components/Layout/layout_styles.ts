import styled from "styled-components";

export const LayoutBox = styled.div`
  background-color: ${p => p.theme.colors.body};
  color: ${p=>p.theme.colors.blue400};
  min-height: 100vh;
  padding-top: 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
