import styled from "styled-components";

export const ErrorPageBox = styled.div`
  flex:1;
  width: 100vw;
  height: 100vh;
  padding: 10px 10px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  color: ${(p) => p.theme.colors.blue200};
  background-image: linear-gradient(
    ${(p) => p.theme.colors.blue400},
    rgb(112, 112, 112, 0.8)
  );

  font-family: ${(p) => p.theme.fonts.main};
  font-size: ${(p) => p.theme.fonts.size400};
`;
