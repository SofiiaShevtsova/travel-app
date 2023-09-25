import styled from "styled-components";

export const LoginBox = styled.div`
  flex:1;
  height: 100%;
  padding: 10px 10px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  color: ${(p) => p.theme.colors.blue400};

  font-family: ${(p) => p.theme.fonts.main};
  font-size: ${(p) => p.theme.fonts.size400};
`;
