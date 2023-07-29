import styled from "styled-components";

export const DropDownBox = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
`;

export const MenuBox = styled.div`
  position: absolute;
  top: 90%;
  right: 15px;
  min-width: 150px;
  padding: 10px;
  background-color: ${p=>p.theme.colors.white};
  border-radius: 1px;
  box-shadow: ${p => p.theme.shadow};

  text-align: center;
  font-size: ${p => p.theme.fonts.size200};
  font-family: ${p =>p.theme.fonts.main};
  &>*{
  transition: ${p => p.theme.transitions.main};
  padding: 10px;
  font-size: inherit;
  }
  `;

