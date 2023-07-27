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
  min-height: 180px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  background-color: ${(p) => p.theme.colors.blue400};
  font-family: inherit;
  font-size: ${p => p.theme.fonts.size300};

  &>div{
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  }
`;

export const InputBox = styled.label`
  display: flex;
  align-items: center;
  background-color: ${(p) => p.theme.colors.white};
  min-height: 45px;
  max-width: 350px;
  padding: 0 15px;
  
  &>*{
  background-color: inherit;
  }

  & input:focus, input:hover{
    outline: none;
  }
`;

export const TripList = styled.ul`
  padding: 60px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, auto));
  justify-content: center;
  gap: 30px;
  max-width: ${p=>p.theme.widthContainer};
  margin: 0 auto;
`;

