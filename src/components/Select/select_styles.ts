import styled from "styled-components";

export const SelectBox = styled.label`
  position:relative;
  min-width: 160px;
  min-height: 45px;
  margin-left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p=>p.theme.colors.white};
  color: inherit;

  font-family: inherit;
  font-size: ${p => p.theme.fonts.size300};
  `;

export const SelectStyles = styled.select`
  width: 100%;
  height: 100%;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  color: inherit;
  border: none;
  border-radius: 1px;
  appearance: none;

  font-family: inherit;
  font-size: ${p => p.theme.fonts.size300};
  
  &:focus, &:hover {
    outline: none;
  }
`;

export const IconBox = styled.div`
position: absolute;
top: 0;
right: 0;
min-height: 45px;
padding:0 15px 0 0;
display: flex;
justify-content: center;
align-items: center;
pointer-events:none;
`;
