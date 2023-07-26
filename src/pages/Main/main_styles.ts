import styled from "styled-components";

export const MainBox = styled.div`
  flex:1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const FilterBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  min-height: 180px;
  padding: 20px;

  background-color: ${(p) => p.theme.colors.blue400};

  font-family: inherit;
  font-size: ${p => p.theme.fonts.size300};

&>button{
  background-color: ${(p) => p.theme.colors.white};
}
  &>div {
    max-width: 350px;
  }
`;
