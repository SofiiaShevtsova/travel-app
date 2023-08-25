import styled from "styled-components";

export const ButtonBox = styled.button`
    color: inherit;
    background-color: transparent;

    fill: inherit;
    stroke: inherit;

    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: none;
    transition: ${p=>p.theme.transitions.main};

    & svg {
        transition: ${p => p.theme.transitions.main};
    }

    &:hover{
        text-shadow: ${p => p.theme.colors.hover} 1px 0 10px;
        
    }

    &:hover svg{
        transform: scale(1.2);
    }
`;

export const ButtonTextBox = styled.button`
  width: 100%;
  min-width: 160px;
  min-height: 45px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.blue200};
  color: ${p=>p.theme.colors.white};
  border: none;
  border-radius: 1px;
  appearance: none;

  font-family: inherit;
  font-size: ${p => p.theme.fonts.size300};

  transition: ${p=>p.theme.transitions.main};

  
  &:focus, &:hover {
  background-color: ${(p) => p.theme.colors.blue300};
  }
`;


