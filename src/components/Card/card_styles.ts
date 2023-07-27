import styled from "styled-components";

export const CardBox = styled.li`
display: flex;
  flex-direction: column;
  max-width: 320px;
  background-color: ${p=>p.theme.colors.white};
  border-radius: 1px;
  box-shadow: ${p => p.theme.shadow};
  & a{
  width: 100%;
  min-height: 45px;
  padding: 10px 15px;
  background-color: ${(p) => p.theme.colors.blue200};
  color: ${p=>p.theme.colors.white};
  font-size: ${p => p.theme.fonts.size300};

  &:hover {
  background-color: ${(p) => p.theme.colors.blue300};
  }
}
  `;

export const CardContents = styled.div`
  margin-top:auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 30px;
`;
