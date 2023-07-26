import styled from "styled-components";

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  cursor: pointer;
`;

export const InputStyle = styled.input`
  min-width: 160px;
  min-height: 45px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.blue100};
  color: inherit;
  border: none;
  border-radius: 1px;
  appearance: none;

  font-family: inherit;
  font-size: ${p => p.theme.fonts.size300};
  
  &:focus, &:hover {
    outline: 2px solid ${p=>p.theme.colors.blue200};
  }
`;


export const Label = styled.label`
color: inherit;
font-family: inherit;
  `;