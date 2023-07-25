import styled from "styled-components";

export const HeaderBox = styled.header`
position: fixed;
top: 0;
left: 0;
width: 100vw;
padding: 20px 30px;
display: flex;
align-items: flex-end;
justify-content: space-between;

font-size: 24px;
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

