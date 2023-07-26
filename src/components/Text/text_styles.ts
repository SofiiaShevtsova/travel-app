import styled from "styled-components";

export const TextStyle = styled.p`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  font-size: ${(p) => p.theme.fonts.size200};
  & a {
    text-decoration: underline;
    color: ${(p) => p.theme.colors.blue200};
  }
`;
