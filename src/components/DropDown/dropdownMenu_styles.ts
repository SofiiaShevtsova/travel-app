import styled from "styled-components";

export const DropDownBox = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
`;

export const MenuBox = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  min-width: 200px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  border: 2px solid red;
`;

