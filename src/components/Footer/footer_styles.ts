import styled from "styled-components";

export const FooterBox = styled.footer`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 30px 20px;
  color: ${(p) => p.theme.colors.blue200};
  background-color: ${(p) => p.theme.colors.blue400};

  font-family: ${(p) => p.theme.fonts.main};

  & svg {
    fill:${p=>p.theme.colors.white}
  }
`;

export const Text = styled.span`
  color: ${(p) => p.theme.colors.white};
`;
